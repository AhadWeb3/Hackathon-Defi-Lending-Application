import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (

    <div className=" Pastel bg-gradient-to-tr from-violet-500 to-orange-300 h-screen mx-auto">
      <div className='text-3xl font-bold text-black p-2 text-center'>
        Welcome to Decentralised Loan Application!
      </div>

      <div class="flex justify-center m-14">
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm m-8">
          <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Do you want to become our lender!</h5>
          <p class="text-gray-700 text-base mb-4">
            The lender can deposit money in the platform, similar to how people deposite money in the bank.
          </p>
          <Link href="/lender">
            <a>
          <button type="button" class="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Lender</button>
            </a>
          </Link>
        </div>

        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm m-8">
          <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Do you want to borrow money!!</h5>
          <p class="text-gray-700 text-base mb-4">
            The borrower can deposit crypto assets as collateral and obtain cryptocurrency loan with a specified maturity period and interest rate.
          </p>
          <Link href="/borrower">
          <button type="button" class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Borrower</button>
        </Link>
        </div>
      </div>
    </div>

  )
}


export default Home;