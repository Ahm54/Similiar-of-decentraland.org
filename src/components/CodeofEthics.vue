<template>
    <TopBar />
    <div class="main">
        <div class="div-1">
            <h3 class="h3"><i class="fas fa-heartbeat"></i> Logo and Name</h3>
            <h3 class="h3"><i class="fas fa-tree"></i> Content Policy</h3>
            <h3 class="h3"><i class="fas fa-key"></i> Privacy Policy</h3>
            <h3 class="h3"><i class="fas fa-balance-scale"></i> Code of Ethics</h3>
            <h3 class="h3"><i class="fas fa-compass"></i> Term of Use</h3>
            <h3 class="h3"><i class="fas fa-shield-alt"></i> Security</h3>
        </div>
        <div class="div-2">
            <h2 class="h2">Code of Ethics</h2>
            <h5 class="h5">1. DECENTRALAND’S CODE OF ETHICS</h5>
            <h5 class="h5">2. POLICIES AND PRINCIPLES</h5>
            <h5 class="h5">3. THE COMPLIANCE TEAM</h5>
            <h5 class="h5">4. IMPLEMENTATION – TRAINING PROCEDURES</h5>
            <h5 class="h5">5. TREATMENT OF BUSINESS PARTNERS AND THIRD PARTIES/CONFLICTS OF INTEREST</h5>
            <h5 class="h5">6. BASIC RULES OF CONDUCTS ON RISK MATTERS</h5>
            <h5 class="h5">7. BREACHES TO THE CODE</h5>
            <br>
            <h2 class="h2">1. DECENTRALAND’S CODE OF ETHICS</h2>
            <p class="p">This Code of Ethics applies to Decentraland and all of its affiliates or subsidiaries (the
                “Decentraland Group”). Our Values of integrity, responsibility, respect and pioneering are the simplest
                statement of who we are. They govern everything we do. Our reputation as a company that the users can trust
                is our most valuable asset, and it is up to all of us to make sure that we continually earn that trust. All
                of our communications and other interactions with our users should increase their trust in us, that’s why we
                publish this externally and expect all others who work with us to set themselves equally high principles.
            </p>
            <h2 class="h2">2. POLICIES AND PRINCIPLES</h2>
            <p class="p">These Policies and Principles we are talking about the ethical behaviors and guides that we all
                need to follow when working for Decentraland. They are mandatory for us, but we also publish them externally
                on our website in support of transparency. Compliance with these principles is an essential part of the way
                we conduct business. The Decentraland Compliance Team is responsible for guarantying the application of
                these Policies and Principles throughout the company. Keeping in mind the following Policies and Principles
                will help us to achieve the highest standards of compliance.</p>
            <h2 class="h2">3. THE COMPLIANCE TEAM</h2>
            <p class="p">The Compliance Team has a duty of supervision. The members of the Compliance Team must be diligent,
                proactive and ethical individuals whose role is to make sure that the Company is conducting its business in
                full compliance with this Code of Ethics and the applicable law.</p>
            <h2 class="h2">4. IMPLEMENTATION – TRAINING PROCEDURES</h2>
            <p class="p">Decentraland shall conduct regular training procedures to make sure that everyone knows and
                understands the Code of Ethics. Our employees are the face of our Company and we train them to respect the
                Company’s principles and standards not only while working but also in their own life.</p>
            <h2 class="h2">5. TREATMENT OF BUSINESS PARTNERS AND THIRD PARTIES/CONFLICTS OF INTEREST</h2>
            <p class="p">Decentraland will conduct its operations in accordance with internationally accepted principles of
                good corporate governance. We will provide timely, regular and reliable information on our activities,
                structure, financial situation and performance to all shareholders anytime they need it and also be in
                accordance between all the companies in the Decentraland Group.

                5.2 Competition
                Decentraland companies and employees will conduct their operations in accordance with the principles of fair
                competition and all applicable regulations. Every employee must comply with the laws of fair competition.
                Employees shall seek guidance from the legal department of their particular company within the Decentraland
                Group when in doubt.</p>
            <h2 class="h2">6. BASIC RULES OF CONDUCTS ON RISK MATTERS</h2>
            <p class="p">Decentraland and its employees will ensure that Decentraland does not receive the proceeds of
                criminal activities. All employees must be alert to the suspicious transactions such as when third parties
                (i) make or ask for payments in a form outside the ordinary course of business; (ii) split payments from
                several companies to our company; (iii) make or ask for payments in cash when they are usually made by check
                or wire transfer; or (iv) make or ask for payments in advance when are not customary or required by
                contract.</p>
            <h2 class="h2">7. BREACHES TO THE CODE</h2>
            <p class="p">Breaching the Code of Ethics could have very serious consequences for Decentraland and for
                individuals involved. Where illegal conduct is involved, these could include significant fines for
                Decentraland, imprisonment for individuals and significant damage to our reputation.

                Regardless of the sanctions imposed by the law, any employee guilty of a violation of the law or of this
                Code of Ethics while carrying out the Decentraland Group’s business will be subject to disciplinary measures
                up to and including termination when applicable.</p>
        </div>
    </div>
    <div class="footer">
        <div class="hrefs">
            <a href="/" class="fa">Home</a>
            <a class="fa" href="/privacy">Privacy Policy</a>
            <a class="fa" href="/termofuse">Terms of use</a>
            <a class="fa" href="/contentpolicy">Content Policy</a>
            <a class="fa" href="/codeofethics">Code of Ethics</a>
        </div>
    </div>
</template>

<script>
import TopBar from './TopBar.vue';

export default {
    components: { TopBar }
}
</script>

<style scoped>
.main {
    background-color: black;
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
}

.div-1 {
    margin: 100px;
    width: 200px;
    padding-top: 80px;
    text-align: start;
}

.div-2 {
    padding-top: 80px;
    padding-left: 150px;
    padding-right: 30px;
    width: 800px;
    text-align: start;
    padding-bottom: 50px;
}

.h2 {
    text-align: start;
    color: white;
    padding-bottom: 30px;
    padding-top: 30px;
}

.h3 {
    color: white;
}

.h3:hover {
    color: pink;
}

.p {
    color: white;
}

.h5 {
    color: white;
}
.hrefs{
    color:white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding:10px;
    text-align: center;
    background-color: black;
}
.fa{
    color:gray;
    text-decoration: none;
}
</style>