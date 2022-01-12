import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type PropsType = {};

const schema = yup.object({
  example: yup.string().required(),
}).required();

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other'
}

interface Inputs {
  example: string,
  exampleRequired: string,
  gender: GenderEnum
}

export const SimpleForm: React.VFC<PropsType> = () => {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data, null, 2));
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('example')} />
        <input type="text" {...register('exampleRequired', { required: true })} />
        <select {...register('gender')}>
          <option value={GenderEnum.male}>{GenderEnum.male}</option>
          <option value={GenderEnum.female}>{GenderEnum.female}</option>
          <option value={GenderEnum.other}>{GenderEnum.other}</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      {errors.exampleRequired && <span>This field is required</span>}
    </div>
  );
};
