import { Field, WrappedFieldProps } from 'redux-form';
import s from './FormsControls.module.css';
import { FC } from 'react';

export const FormControl: FC<FormControlProps> = ({ input, meta, tagName, ...props }) => {
    const hasError = meta.touched && meta.error;
    const Tag = tagName;

    return (
        <>
            <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
                <div>
                    <Tag {...input} {...props} />
                </div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </>
    );
};

export const createField = (
    placeholder: string | null,
    name: string,
    tagName: string,
    component: any,
    validators: any,
    type: any,
    text: string | null,
) => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            tagName={tagName}
            component={component}
            validate={validators}
            type={type}
        />
        <span>{text}</span>
    </div>
);

// types
type FormControlProps = WrappedFieldProps & {
    tagName: 'textarea' | 'input';
};
