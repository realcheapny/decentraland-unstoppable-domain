<template>
  <main class="">
    <!-- <div v-if="state?.status" class="home w-full h-full"> -->
    <div v-if="state?.status" class="home w-full h-full">
      <div class="inside">
        <img
          class="flex justify-center w-1/4 mb-30"
          src="../assets/images/logoOfficial.png"
          alt="Logo"
        />
        <div class="justify-start w-7/12 mx-10 my-10">
          <h1 class="text-4xl mb-6 font-bold leading-loose mb-5">
            DecentraLand is a safe way to sell and buy a property using
            <strong>Blockchain technologies</strong>
            to provide a truly decentralized experience that is comparable to
            the Bitcoin blockchain network.
          </h1>
          <p class="text-xl mb-10">
            We provide a complete informational service for the property you are
            searching for.
          </p>
          <div class="flex justify-center gap-6 my-10">
            <router-link
              :to="{ name: 'MyProperties' }"
              class="bg-red-500 rounded-lg text-white h-12 py-2 px-6 text-lg"
            >
              <span class="menu-span">All Properties</span>
            </router-link>
            <router-link
              :to="{ name: 'FindProperty' }"
              class="bg-red-500 rounded-lg text-white h-12 py-2 px-6 text-lg"
            >
              <span class="menu-span">Find a Property</span>
            </router-link>
          </div>
        </div>

        <div class="text-4xl mb-6 font-bold leading-loose my-3">
          <button @click="connectUserWallet" class="button">Connected</button>
          <p class="text-sm">Unstoppable Domain Name: {{ name }}</p>

          <!-- <h3>Address: {{ state.address }}</h3>
        <h3>ChainId: {{ state.chainId }}</h3>
        <h3>Contract: {{ state.contract || "no contract"}}</h3> -->
          <button
            @click="disconnectUser"
            class="bg-red-300 rounded-lg text-white h-8 py-0 px-3 text-sm"
          >
            Disconnect Wallet
          </button>
        </div>
      </div>
    </div>
    <div v-else class="h-screen">
      <img
        class="flex justify-center w-2/4 flex-col items-center mx-auto mb-20"
        src="../assets/images/logoOfficial.png"
        alt="Logo"
      />
      <div
        class="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 m-auto mb-40"
      >
        <div class="space-y-6">
          <h5
            class="text-xl font-medium text-gray-900 dark:text-white text-center"
          >
            Sign in to our platform
          </h5>

          <button
            @click=""
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Connect Wallet
          </button>
          <button
            @click="userLogIn"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login With UnstoppableDomains
          </button>
        </div>
      </div>
      <div class="flex flex-wrap flex-row justify-between pt-20">
        <img class="w-36 h-20" src="../assets/images/Polygon.png" alt="Logo" />
        <img class="w-20 h-20" src="../assets/images/TheGraph.png" alt="Logo" />
        <img class="w-20 h-20" src="../assets/images/IPFS.png" alt="Logo" />
        <img class="w-36 h-20" src="../assets/images/WC.png" alt="Logo" />
      </div>
    </div>
  </main>
</template>

<script>
import { utils, BigNumber, providers } from 'ethers'
import connect from '../composables/connect'
import instantiateContract from '@/contracts'
import { provider } from '../walletConnect/provider'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'WalletConnect',
  setup: () => {
    const { connectWalletConnect, disconnectWallet, state } = connect()
    const connectUserWallet = async () => {
      await connectWalletConnect()
    }

    const disconnectUser = async () => {
      await disconnectWallet()
    }

    const createProperty = async () => {
      const contract = instantiateContract(null)
      const metadata = BigNumber.from(
        'QmaQv8mFZfZdD8KTthSVXSKykoRPphGPbeiBiRYv4h54MR',
      )
      const value = utils.parseEther('1')
      const tx = await contract.createProperty(metadata, value, {
        gasLimit: 100000000000,
      })
      await provider.enable()
      const web3Provider = new providers.Web3Provider(provider)
      const signer = web3Provider.getSigner()
      console.log(tx.hash, signer)
      const receipt = await tx.wait()
      console.log(receipt.blockHash)
    }

    return {
      connectUserWallet,
      disconnectUser,
      createProperty,
      state,
    }
  },
  computed: mapGetters(['name']),
  methods: {
    ...mapActions(['setUserName']),
    async connectUD() {},
    async userLogIn() {
      try {
        this.setUserName()
        this.state.status = true
        // this.$router.push("/findProperty")
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
