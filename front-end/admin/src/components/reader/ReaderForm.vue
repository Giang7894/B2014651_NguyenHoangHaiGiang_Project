<template>
    <Form @submit="submitReader" :validation-schema="readerFormSchema"
        class="needs-validation bg-white mt-5 mb-5 border border-black border-1 p-3" novalidate>
        <div class="form-group my-3">
            <label for="name">Name</label>
            <Field v-model="readerLocal.name" type="text" class="form-control my-3" id="name" name="name" placeholder=""
                required>
            </Field>
            <div class="invalid-feedback">
                Please enter a name.
            </div>
        </div>
        <div class="form-group my-3">
            <label for="author">Birth</label>
            <Field v-model="readerLocal.birth" type="text" class="form-control my-3" id="birth" name="birth"
                placeholder="" required>
            </Field>
            <div class="invalid-feedback">
                Please enter a birthday.
            </div>
        </div>
        <div class="form-group my-3">
            <label for="price">Address</label>
            <Field v-model="readerLocal.address" type="text" class="form-control my-3" id="address" name="addres"
                placeholder="" required>
            </Field>
            <div class="invalid-feedback">
                Please enter a price.
            </div>
        </div>
        <div class="form-group my-3">
            <label for="img">Phone</label>
            <Field v-model="readerLocal.phone" type="text" class="form-control my-3" id="phone" name="phone"
                placeholder="" required></Field>
            <div class="invalid-feedback">
                Please enter a phone.
            </div>
        </div>
        <div class="form-group my-3">
            <label for="total">Sex</label>
            <Field v-model="readerLocal.sex" type="text" class="form-control my-3" id="sex" name="sex" placeholder=""
                required></Field>
            <div class="invalid-feedback">
                Enter a gender.
            </div>
        </div>
        <div class="form-group my-3">
            <label for="total">Email</label>
            <Field v-model="readerLocal.email" type="email" class="form-control my-3" id="email" name="email" placeholder=""
                required></Field>
            <div class="invalid-feedback">
                Enter a email.
            </div>
        </div>
        <div class="form-group">
            <button class="ad btn btn-primary col-6 my-3" type="submit" name="submit">Submit</button>
            <button v-if="readerLocal._id" @click="deleteReader" class="btn btn-secondary col-2 float-end my-3"
                type="reset">Delete</button>
        </div>
    </form>
</template>

<script>
import * as yup from 'yup';
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:reader"],
    props: {
        reader: { type: Object, required: true },
    },
    data() {
        const readerFormSchema = yup.object().shape({
            name: yup.string().required("At least 5 characters"),
        });
        return {
            readerLocal: this.reader,
            readerFormSchema,
        };
    },
    methods: {
        submitReader() {
            this.$emit("submit:reader", this.readerLocal);
        },
        deleteReader() {
            this.$emit("delete:reader", this.readerLocal);
        }
    },
}
</script>