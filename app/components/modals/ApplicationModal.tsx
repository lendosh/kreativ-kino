'use client'

import React, {useState} from 'react';
import useApplicationModal from '@/app/hooks/useApplicationModal';
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import Modal from "@/app/components/modals/Modal";
import Input from "@/app/components/inputs/Input";
import {sendEmail} from "@/app/utils/SendEmail";

export type FormData = {
    firstName: string,
    secondName: string,
    email: string,
    phoneNumber: string,
    description: string
}

const ApplicationModal = () => {
    const [isLoading, setIsLoading] = useState(false);

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
        console.log('test-test');
        sendEmail(data);
        applicationModal.onClose();
        setIsLoading(false);
        reset();
    }

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Input
                id='firstName'
                label='First name'
                register={register}
                errors={errors}
                required
            />
            <Input
                id='secondName'
                label='Second name'
                register={register}
                errors={errors}
            />
            <Input
                id='email'
                label='Email'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id='phoneNumber'
                label='Phone'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id='description'
                label='Description'
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    return (
        <Modal
            disabled
            title='Send to us the request'
            actionLabel='Send'
            isOpen={applicationModal.isOpen}
            onClose={applicationModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
        />
    );
};

export default ApplicationModal;