'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, Loader2 } from 'lucide-react';
import { Field, FieldError, ErrorSummary, describedBy, inputClass } from './forms/controls';
import FormSuccess from './forms/FormSuccess';
import { postToFormspree } from '@/lib/forms';
import { pagePath } from '@/lib/paths';

type Values = {
  name: string;
  shopName: string;
  shopType: string;
  city: string;
  phone: string;
  language: string;
  trackMethod: string;
  consent: boolean;
  hp_field: string; // honeypot: real users never see or fill this
};
type Errors = Partial<Record<keyof Values, string>>;

const SHOP_TYPES = ['kirana', 'medical', 'tailor', 'salon', 'mobile', 'other'] as const;
const TRACK_OPTIONS = ['notebook', 'memory', 'app', 'none'] as const;
// Language names are shown in their own script (planner §11).
const LANGUAGES = [
  { val: 'kn', label: 'ಕನ್ನಡ' },
  { val: 'hi', label: 'हिंदी' },
  { val: 'en', label: 'English' },
] as const;
// Field ids in visual order, used to move focus to the first invalid field.
const FIELD_IDS: Partial<Record<keyof Values, string>> = {
  name: 'pilot-name',
  shopName: 'pilot-shop',
  shopType: 'pilot-type',
  city: 'pilot-city',
  phone: 'pilot-phone',
  consent: 'pilot-consent',
};

export default function PilotForm() {
  const locale = useLocale();
  const t = useTranslations('pilotPage');
  const f = useTranslations('forms');
  const nav = useTranslations('nav');
  const common = useTranslations('common');

  const [values, setValues] = useState<Values>({
    name: '',
    shopName: '',
    shopType: '',
    city: '',
    phone: '',
    language: locale === 'kn' ? 'kn' : 'en',
    trackMethod: '',
    consent: false,
    hp_field: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'failed'>('idle');

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!values.name.trim()) e.name = f('required');
    if (!values.shopName.trim()) e.shopName = f('required');
    if (!values.shopType) e.shopType = f('required');
    if (!values.city.trim()) e.city = f('required');
    if (!/^[6-9]\d{9}$/.test(values.phone)) e.phone = f('phoneInvalid');
    if (!values.consent) e.consent = f('consentRequired');
    return e;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    // Bots fill the hidden field. Pretend success and send nothing.
    if (values.hp_field) {
      setStatus('success');
      return;
    }

    const found = validate();
    setErrors(found);
    const firstInvalid = (Object.keys(FIELD_IDS) as (keyof Values)[]).find((k) => found[k]);
    if (firstInvalid) {
      setStatus('idle');
      document.getElementById(FIELD_IDS[firstInvalid]!)?.focus();
      return;
    }

    setStatus('submitting');
    const { hp_field: _hp, ...data } = values;
    const result = await postToFormspree(process.env.NEXT_PUBLIC_FORMSPREE_PILOT_ID, {
      ...data,
      locale,
      source: 'getlekka-pilot-signup',
    });
    setStatus(result.ok ? 'success' : 'failed');
  };

  if (status === 'success') {
    return (
      <FormSuccess
        title={t('successTitle')}
        message={t('successMessage')}
        backLabel={common('backHome')}
        backHref={pagePath(locale)}
      />
    );
  }

  const hasErrors = Object.values(errors).some(Boolean);
  const control = (key: keyof Values, help?: string) => describedBy(FIELD_IDS[key] ?? '', { error: errors[key], help });

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-6 rounded-[2rem] bg-white p-6 shadow-lift ring-1 ring-primary/10 sm:p-10"
    >
      {hasErrors && <ErrorSummary message={f('errorSummary')} />}
      {status === 'failed' && <ErrorSummary message={f('sendFailed')} />}

      {/* Honeypot (hidden from people and assistive tech) */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this empty
          <input
            type="text"
            name="hp_field"
            tabIndex={-1}
            autoComplete="off"
            value={values.hp_field}
            onChange={(e) => set('hp_field', e.target.value)}
          />
        </label>
      </div>

      <Field id="pilot-name" label={t('nameLabel')} required requiredSr={f('requiredSr')} error={errors.name}>
        <input
          id="pilot-name"
          type="text"
          autoComplete="name"
          placeholder={t('namePlaceholder')}
          value={values.name}
          onChange={(e) => set('name', e.target.value)}
          className={inputClass}
          {...control('name')}
        />
      </Field>

      <Field id="pilot-shop" label={t('shopNameLabel')} required requiredSr={f('requiredSr')} error={errors.shopName}>
        <input
          id="pilot-shop"
          type="text"
          autoComplete="organization"
          placeholder={t('shopNamePlaceholder')}
          value={values.shopName}
          onChange={(e) => set('shopName', e.target.value)}
          className={inputClass}
          {...control('shopName')}
        />
      </Field>

      <Field id="pilot-type" label={t('shopTypeLabel')} required requiredSr={f('requiredSr')} error={errors.shopType}>
        <select
          id="pilot-type"
          value={values.shopType}
          onChange={(e) => set('shopType', e.target.value)}
          className={inputClass}
          {...control('shopType')}
        >
          <option value="" disabled>
            {t('shopTypePlaceholder')}
          </option>
          {SHOP_TYPES.map((k) => (
            <option key={k} value={k}>
              {t(`shopTypes.${k}`)}
            </option>
          ))}
        </select>
      </Field>

      <Field id="pilot-city" label={t('cityLabel')} required requiredSr={f('requiredSr')} error={errors.city}>
        <input
          id="pilot-city"
          type="text"
          autoComplete="address-level2"
          placeholder={t('cityPlaceholder')}
          value={values.city}
          onChange={(e) => set('city', e.target.value)}
          className={inputClass}
          {...control('city')}
        />
      </Field>

      <Field
        id="pilot-phone"
        label={t('phoneLabel')}
        required
        requiredSr={f('requiredSr')}
        error={errors.phone}
        help={t('phoneHelp')}
      >
        <div className="flex">
          <span
            aria-hidden="true"
            className="flex min-h-[56px] items-center rounded-l-2xl border border-r-0 border-line bg-surface-container px-4 font-semibold text-on-surface-variant"
          >
            +91
          </span>
          <input
            id="pilot-phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            maxLength={10}
            placeholder={t('phonePlaceholder')}
            value={values.phone}
            onChange={(e) => set('phone', e.target.value.replace(/\D/g, ''))}
            className={`${inputClass} !rounded-l-none`}
            {...control('phone', t('phoneHelp'))}
          />
        </div>
      </Field>

      <fieldset>
        <legend className="mb-2 font-display text-[0.95rem] font-bold text-primary">{t('langLabel')}</legend>
        <div className="grid grid-cols-3 gap-3">
          {LANGUAGES.map(({ val, label }) => (
            <label key={val} className="relative cursor-pointer">
              <input
                type="radio"
                name="language"
                value={val}
                checked={values.language === val}
                onChange={() => set('language', val)}
                className="peer sr-only"
              />
              <span className="flex min-h-[56px] items-center justify-center rounded-2xl border border-line bg-white px-2 text-center text-base font-bold text-on-surface-variant shadow-resting transition-all peer-checked:border-brand-green peer-checked:bg-secondary-container peer-checked:text-primary peer-focus-visible:ring-4 peer-focus-visible:ring-brand-green/25 hover:border-brand-green/50">
                {label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field id="pilot-track" label={t('trackCreditLabel')}>
        <select
          id="pilot-track"
          value={values.trackMethod}
          onChange={(e) => set('trackMethod', e.target.value)}
          className={inputClass}
        >
          <option value="">{f('selectOption')}</option>
          {TRACK_OPTIONS.map((k) => (
            <option key={k} value={k}>
              {t(`trackCreditOptions.${k}`)}
            </option>
          ))}
        </select>
      </Field>

      <div>
        <label className="flex cursor-pointer items-start gap-3 rounded-2xl bg-surface p-4 ring-1 ring-primary/10">
          <input
            id="pilot-consent"
            type="checkbox"
            checked={values.consent}
            onChange={(e) => set('consent', e.target.checked)}
            className="mt-0.5 h-6 w-6 shrink-0 accent-primary"
            {...control('consent')}
          />
          <span className="text-[0.95rem] leading-relaxed text-on-surface-variant">
            {t('consentText')}{' '}
            <Link
              href={pagePath(locale, 'privacy')}
              className="font-semibold text-brand-green underline underline-offset-4 hover:text-primary"
            >
              {nav('privacy')}
            </Link>
          </span>
        </label>
        <FieldError id="pilot-consent" message={errors.consent} />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="group flex min-h-[60px] w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-lg font-bold text-white shadow-btn transition-all hover:-translate-y-0.5 hover:bg-primary-container hover:shadow-lift active:scale-[0.98] disabled:opacity-70"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            <span>{t('submitting')}</span>
          </>
        ) : (
          <>
            <span>{t('submitBtn')}</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
