'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Loader2, Send } from 'lucide-react';
import { Field, ErrorSummary, describedBy, inputClass } from './forms/controls';
import FormSuccess from './forms/FormSuccess';
import { postToFormspree } from '@/lib/forms';
import { pagePath } from '@/lib/paths';

type Values = { name: string; email: string; org: string; message: string; hp_contact: string };
type Errors = Partial<Record<keyof Values, string>>;

const FIELD_IDS: Partial<Record<keyof Values, string>> = {
  name: 'contact-name',
  email: 'contact-email',
  message: 'contact-message',
};

export default function ContactForm() {
  const locale = useLocale();
  const t = useTranslations('contactPage');
  const f = useTranslations('forms');
  const common = useTranslations('common');

  const [values, setValues] = useState<Values>({ name: '', email: '', org: '', message: '', hp_contact: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'failed'>('idle');

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!values.name.trim()) e.name = f('required');
    if (!values.email.trim()) e.email = f('required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) e.email = f('emailInvalid');
    if (!values.message.trim()) e.message = f('required');
    return e;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    if (values.hp_contact) {
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
    const { hp_contact: _hp, ...data } = values;
    const result = await postToFormspree(process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID, {
      ...data,
      locale,
      source: 'getlekka-contact',
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
  const control = (key: keyof Values) => describedBy(FIELD_IDS[key] ?? '', { error: errors[key] });

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-6 rounded-[2rem] bg-white p-6 shadow-lift ring-1 ring-primary/10 sm:p-10"
    >
      {hasErrors && <ErrorSummary message={f('errorSummary')} />}
      {status === 'failed' && <ErrorSummary message={f('sendFailed')} />}

      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this empty
          <input
            type="text"
            name="hp_contact"
            tabIndex={-1}
            autoComplete="off"
            value={values.hp_contact}
            onChange={(e) => set('hp_contact', e.target.value)}
          />
        </label>
      </div>

      <Field id="contact-name" label={t('nameLabel')} required requiredSr={f('requiredSr')} error={errors.name}>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => set('name', e.target.value)}
          className={inputClass}
          {...control('name')}
        />
      </Field>

      <Field id="contact-email" label={t('emailLabel')} required requiredSr={f('requiredSr')} error={errors.email}>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => set('email', e.target.value)}
          className={inputClass}
          {...control('email')}
        />
      </Field>

      <Field id="contact-org" label={t('orgLabel')}>
        <input
          id="contact-org"
          type="text"
          autoComplete="organization"
          value={values.org}
          onChange={(e) => set('org', e.target.value)}
          className={inputClass}
        />
      </Field>

      <Field id="contact-message" label={t('messageLabel')} required requiredSr={f('requiredSr')} error={errors.message}>
        <textarea
          id="contact-message"
          rows={5}
          value={values.message}
          onChange={(e) => set('message', e.target.value)}
          className={`${inputClass} py-3`}
          {...control('message')}
        />
      </Field>

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
            <Send className="h-5 w-5" aria-hidden="true" />
            <span>{t('submitBtn')}</span>
          </>
        )}
      </button>
    </form>
  );
}
