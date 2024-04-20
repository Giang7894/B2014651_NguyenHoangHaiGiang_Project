<script>
import EmployeeList from "@/components/employee/EmployeeList.vue"
import employeeService from "@/services/employee.service";

export default {
    components: {
        EmployeeList,
    },
    data() {
        return {
            employees: [],
            searchText: '',
        };
    },
    watch: {

    },
    computed: {
        emStrings() {
            return this.employees.map((employee) => {
                const { name } = employee;
                return [name].join("");
            });
        },
        filteredEmployees() {
            if (!this.searchText) return this.employees;
            return this.employees.filter((_employee, index) => this.employeeStrings[index].includes(this.searchText));
        },
        filteredEmployeesCount() {
            return this.filteredEmployees.length;
        },
    },
    methods: {
        async retrieveEmployees() {
            try {
                this.employees = await employeeService.getAll();

            } catch (error) {
                console.log(error);
            }
        },

        refreshList() {
            this.retrieveEmployees();
        },

        async gotoAddEmployee() {
            this.$router.push({ name: "employee.add" });
        },
    },
    mounted() {
        this.refreshList();
    }
}
</script>

<template>
    <h1 class="text-center">EMPLOYEE</h1>
    <a type="button" class="btn btn-primary mb-5" @click="gotoAddEmployee">Add new book</a>
    <EmployeeList v-if="filteredEmployeesCount > 0" :employees="filteredEmployees" />
    <p v-else>No employee what so ever</p>
</template>


<style>
.page {
    text-align: left;
    max-width: 750px;
}
</style>