<template>
    <div>
        <h1>Not Found</h1>
        <p>
            Oops we couldn't find that page. Try going <a> home 
            <router-link :to="{ name: 'home', }" /> </a>
        </p>
    </div>
</template>