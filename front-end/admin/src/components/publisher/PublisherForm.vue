<template>
    <Form @submit="submitPub" :validation-schema="pubFormSchema"
        class="needs-validation bg-white mt-5 mb-5 border border-black border-1 p-3" novalidate>
        <div class="form-group my-3">
            <label for="name">Name</label>
            <Field v-model="pubLocal.name" type="text" class="form-control my-3" id="name" name="name" placeholder=""
                required>
            </Field>
            <div class="invalid-feedback">
                Please enter a name.
            </div>
        </div>
        <div class="form-group my-3">
            <label for="author">Address</label>
            <Field v-model="pubLocal.address" type="text" class="form-control my-3" id="address" name="address"
                placeholder="" required>
            </Field>
            <div class="invalid-feedback">
                Please enter a directory.
            </div>
        </div>
        <div class="form-group">
            <button class="ad btn btn-primary col-6 my-3" type="submit" name="submit">Submit</button>
            <button v-if="pubLocal._id" @click="deletePub" class="btn btn-secondary col-2 float-end my-3"
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
    emits: ["submit:publisher"],
    props: {
        pub: { type: Object, required: true },
    },
    data() {
        const pubFormSchema = yup.object().shape({
            name: yup.string().required("At least 5 characters"),
        });
        return {
            pubLocal: this.pub,
            pubFormSchema,
        };
    },
    methods: {
        submitPub() {
            this.$emit("submit:pub", this.pubLocal);
        },
        deletePub() {
            this.$emit("delete:pub", this.pubLocal);
        }
    },
}
</script>