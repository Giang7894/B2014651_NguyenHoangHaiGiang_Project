<template>
    <Form @submit="submitEm" :validation-schema="emFormSchema"
        class="needs-validation bg-white mt-5 mb-5 border border-black border-1 p-3" novalidate>
        <div class="form-group my-3">
            <label for="name">Name</label>
            <Field v-model="emLocal.name" type="text" class="form-control my-3" id="name" name="name" placeholder=""
                required>
            </Field>
            <div class="invalid-feedback">
                Please enter a name.
            </div>
        </div>
        <div class="form-group my-3">
            <label for="author">Address</label>
            <Field v-model="emLocal.address" type="text" class="form-control my-3" id="address" name="address"
                placeholder="" required>
            </Field>
            <div class="invalid-feedback">
                Please enter a directory.
            </div>
        </div>
        <div class="form-group my-3">
            <label for="role">Role</label>
            <select v-model="emLocal.role" name="role" class="mb-3" >
                <option disabled value="" >Please select a role</option>
                <option value="manager">Manager</option>
                <option value="employee">Employee</option>
            </select>
        </div>
        <div class="form-group my-3">
            <label for="author">Phone</label>
            <Field v-model="emLocal.phone" type="text" class="form-control my-3" id="phone" name="phone"
                placeholder="" required>
            </Field>
            <div class="invalid-feedback">
                Please enter a directory.
            </div>
        </div>
        <div class="form-group">
            <button class="ad btn btn-primary col-6 my-3" type="submit" name="submit">Submit</button>
            <button v-if="emLocal._id" @click="deleteEm" class="btn btn-secondary col-2 float-end my-3"
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
    emits: ["submit:employee"],
    props: {
        employee: { type: Object, required: true },
    },
    data() {
        const emFormSchema = yup.object().shape({
            name: yup.string().required("At least 5 characters"),
        });
        return {
            emLocal: this.employee,
            emFormSchema,
        };
    },
    methods: {
        submitEm() {
            this.$emit("submit:employee", this.emLocal);
        },
        deleteEm() {
            this.$emit("delete:employee", this.emLocal);
        }
    },
}
</script>