// types.ts

import { ChangeEvent } from 'react';
import { IconType } from 'react-icons';
import { MouseEventHandler } from 'react';


export interface InputFieldConfig {
  IconComponent: IconType;
  placeholder: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface FormProps {
  title: string;
  inputFields: InputFieldConfig[];
}

export interface ButtonProps {
    title: string;
    bgColor: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  }

