import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const schema = yup
    .object({
    example: yup.string().required(),
})
    .required();
var GenderEnum;
(function (GenderEnum) {
    GenderEnum["female"] = "female";
    GenderEnum["male"] = "male";
    GenderEnum["other"] = "other";
})(GenderEnum || (GenderEnum = {}));
export const SimpleForm = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema) });
    const onSubmit = data => alert(JSON.stringify(data, null, 2));
    return (React.createElement("div", null,
        React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
            React.createElement("input", { type: "text", ...register('example') }),
            React.createElement("input", { type: "text", ...register('exampleRequired', { required: true }) }),
            React.createElement("select", { ...register('gender') },
                React.createElement("option", { value: GenderEnum.male }, GenderEnum.male),
                React.createElement("option", { value: GenderEnum.female }, GenderEnum.female),
                React.createElement("option", { value: GenderEnum.other }, GenderEnum.other)),
            React.createElement("button", { type: "submit" }, "Submit")),
        errors.exampleRequired && React.createElement("span", null, "This field is required")));
};
//# sourceMappingURL=SimpleForm.js.map