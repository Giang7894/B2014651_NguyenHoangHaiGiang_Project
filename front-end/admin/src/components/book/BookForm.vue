<template>
    <Form @submit="submitBook" :validation-schema="bookFormSchema"
        class="needs-validation bg-white mt-5 mb-5 border border-black border-1 p-3" novalidate>
        <div class="form-group my-3">
            <label for="pub">Publisher</label>
            <select v-model="bookLocal.publisher" name="pub" class="mb-3" >
                <option disabled value="" >Please select a publisher</option>
                <option v-for="(pub, index) in pubs" :value="pub._id">{{ pub.name }}</option>
            </select>
        </div>
        <div class="form-group my-3">
            <label for="name">Name</label>
            <Field v-model="bookLocal.name" type="text" class="form-control my-3" id="name" name="name" placeholder=""
                required>
            </Field>
            <div class="invalid-feedback">
                Please enter a name.
            </div>
        </div>
        <div class="form-group my-3">
            <label for="author">Author</label>
            <Field v-model="bookLocal.author" type="text" class="form-control my-3" id="author" name="author"
                placeholder="" required>
            </Field>
            <div class="invalid-feedback">
                Please enter a name.
            </div>
        </div>
        <div class="form-group my-3">
            <label for="price">Price</label>
            <Field v-model="bookLocal.price" type="number" class="form-control my-3" id="price" name="price"
                placeholder="" required>
            </Field>
            <div class="invalid-feedback">
                Please enter a price.
            </div>
        </div>
        <div class="form-group my-3">
            <label for="img">Image (URL)</label>
            <Field v-model="bookLocal.image" type="text" class="form-control my-3" id="img" name="img" placeholder=""
                required></Field>
            <div class="invalid-feedback">
                Please enter a URL.
            </div>
        </div>
        <div class="form-group my-3">
            <label for="total">Total</label>
            <Field v-model="bookLocal.quantity" type="number" class="form-control my-3" id="total" name="total"
                placeholder="" required></Field>
            <div class="invalid-feedback">
                Enter a number.
            </div>
        </div>
        <div class="form-group">
            <button class="ad btn btn-primary col-6 my-3" type="submit" name="submit">Submit</button>
            <button v-if="bookLocal._id" @click="deleteBook" class="btn btn-secondary col-2 float-end my-3"
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
    emits: ["submit:book"],
    props: {
        book: { type: Object, required: true },
        pubs: {type:Array,default: []},
    },
    data() {
        const bookFormSchema = yup.object().shape({
            name: yup.string().required("At least 5 characters"),
        });
        return {
            bookLocal: this.book,
            bookFormSchema,
        };
    },
    methods: {
        submitBook() {
            this.$emit("submit:book", this.bookLocal);
        },
        deleteBook() {
            this.$emit("delete:book",this.bookLocal);
        }
    },
}
</script>