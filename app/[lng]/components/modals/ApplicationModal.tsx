'use client'

import React, {useState} from 'react';
import useApplicationModal from '@/app/[lng]/hooks/useApplicationModal';
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import Modal from "@/app/[lng]/components/modals/Modal";
import Input from "@/app/[lng]/components/inputs/Input";
import {sendEmail} from "@/app/[lng]/utils/SendEmail";
import {useTranslation} from "@/app/i18n/client";

export type FormData = {
    firstName: string,
    secondName: string,
    email: string,
    phoneNumber: string,
    description: string
}

interface ApplicationModalProps {
    language: string
}

const ApplicationModal = ({language}: ApplicationModalProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const { t} = useTranslation(language, 'global');

    const applicationModal = useApplicationModal();
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            firstName: '',
            secondName: '',
            email: '',
            phoneNumber: '+41',
            description: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        sendEmail(data);
        applicationModal.onClose();
        setIsLoading(false);
        reset();
    }

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Input
                id='firstName'
                label={t('modal.request.name')}
                register={register}
                errors={errors}
                required
            />
            <Input
                id='secondName'
                label={t('modal.request.surname')}
                register={register}
                errors={errors}
            />
            <Input
                id='email'
                label={t('modal.request.email')}
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id='phoneNumber'
                label={t('modal.request.phone')}
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id='description'
                label={t('modal.request.description')}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    return (
        <Modal
            disabled
            title={t('modal.request.title')}
            actionLabel={t('modal.request.button_text')}
            isOpen={applicationModal.isOpen}
            onClose={applicationModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
        />
    );
};

export default ApplicationModal;