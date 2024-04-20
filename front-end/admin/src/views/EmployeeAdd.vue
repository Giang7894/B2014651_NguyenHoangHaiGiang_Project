<template>
    <h1>Add employee</h1>
    <EmployeeForm :employee="employee" @submit:employee="addEmployee" />
    <p>{{ message }}</p>
</template>


<script>
import EmployeeForm from "@/components/employee/EmployeeForm.vue"
import employeeService from "@/services/employee.service";

export default {
    components: {
        EmployeeForm,
    },
    data() {
        return {
            employee: {
                name: "",
                phone: "",
                address: "",
                role: "",
            },
            message: "",
            pubs: [],
        };
    },
    methods: {
        async addEmployee(data) {
            try {
                await employeeService.create(data);
                this.message = "Success";
            } catch (error) {
                console.log(error);
            }
        },
        async retrieveEmployee() {
            try {
                await employeeService.getAll();
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.retrieveEmployee();
    }
}
</script>