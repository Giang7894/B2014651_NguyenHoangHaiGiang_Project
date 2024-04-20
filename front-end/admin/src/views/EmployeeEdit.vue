<template>
    <EmployeeForm :employee="employee" @submit:employee="updateEmployee" @delete:employee="deleteEmployee" />
</template>

<script>
import EmployeeForm from "@/components/employee/EmployeeForm.vue"
import employeeService from "@/services/employee.service"

export default {
    components: {
        EmployeeForm,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            employee: null,
            message: "",
        }
    },
    methods: {
        async getEmployee(id) {
            try {
                this.employee = await employeeService.get(id);
            } catch (error) {
                console.log(error);
            }
        },
        async updateEmployee(data) {
            try {
                await employeeService.update(this.employee._id, data);
            } catch (error) {
                console.log(error);
            }
        },
        async deleteEmployee() {
            try {
                await employeeService.delete(this.employee._id);
                this.$router.push({ name: "employee" });
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.getEmployee(this.id);
        this.message = "";
    }
}
</script>