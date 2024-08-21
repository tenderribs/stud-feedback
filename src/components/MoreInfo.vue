<script setup lang="ts">
import SfButton from './SfButton.vue'
</script>

<template>
  <div>
    <router-link :to="{ name: 'GroupOverview' }">
      <sf-button icon="bi-arrow-left" class="mb-5">Back</sf-button>
    </router-link>

    <p class="text-2xl text-center mb-2">How It Works & Privacy Policy</p>
    <p class="text-sm text-center mb-10">Last updated: 21. August 2024</p>

    <div class="pb-[20px]">
      <p class="text-lg">Codebase Access:</p>
      <p>
        All the claims made in this privacy policy can be verified by inspecting the codebase. I
        encourage users to review the code themselves. You can access the full codebase at
        <a
          class="text-blue-700 underline"
          href="https://github.com/tenderribs/stud-feedback"
          target="_blank"
        >
          https://github.com/tenderribs/stud-feedback
        </a>
      </p>
    </div>

    <div>
      <p class="text-lg">1. Data Collection and Storage</p>
      <ul>
        <li>
          <b>Local Storage:</b> All data entered into the app, including student information and
          report card details, is stored locally on your device. I do not collect, store, or process
          any data on external servers.
        </li>
        <li>
          <b>No Server Communication:</b> The app does not communicate with any external servers for
          data storage, processing, or transmission. Your data remains entirely on your device.
        </li>
      </ul>
    </div>

    <div>
      <p class="text-lg">2. Data Transmission</p>
      <ul>
        <li>
          <b>WhatsApp Integration:</b> When you choose to send a report card, the app generates a
          prefilled WhatsApp hyperlink (using the wa.me API). This link is used to transmit the
          report card details via the WhatsApp platform. Once the hyperlink is generated, the app
          hands off data transmission to WhatsApp, which is subject to WhatsApp's privacy policy.
        </li>
        <li>
          <b>User Responsibility:</b> It is the user’s responsibility to ensure that the data shared
          via WhatsApp complies with school policies and privacy regulations.
        </li>
      </ul>
    </div>

    <div>
      <p class="text-lg">3. Data Security</p>
      <ul>
        <li>
          <b>Device Security:</b> Since all data is stored locally on your device, I recommend
          ensuring your device is secure and that you follow best practices for data protection,
          such as using strong passwords and keeping your software up to date.
        </li>
        <li>
          <b>No Data Sharing:</b> I do not share, sell, or distribute any data entered into the app
          with third parties. Your data is entirely within your control.
        </li>
      </ul>
    </div>

    <div>
      <p class="text-lg">4. User Consent</p>
      <p class="pt-[10px]">
        By using this service, you agree to this privacy policy and consent to the method of
        handling and transmitting data. You are also responsible for ensuring that any data shared
        through the app is done so in compliance with relevant laws and school district policies.
      </p>
    </div>

    <div class="pt-[10px]">
      <p class="text-lg">5. Changes to This Privacy Policy</p>
      <p class="pt-[10px]">
        I may update this privacy policy from time to time. Any changes will be reflected in the
        "Last Updated" date at the top of this policy. Continued use of the app after any updates
        will constitute your acceptance of the revised policy.
      </p>
    </div>

    <div class="pt-[10px]">
      <p class="text-lg">6. Contact Me</p>
      <p class="pt-[10px]">
        If you have any questions or concerns regarding this privacy policy, please contact me (Mark
        Marolf) at dc3dude@gmail.com
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
ul {
  margin-top: 10px;
}
li {
  margin-bottom: 10px;
}
</style>
