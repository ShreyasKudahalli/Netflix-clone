
const Signup = () => {
  return (
    <div>
        <div className="min-h-screen bg-gradient-to-b from-[#400505] via-[#180000] to-black">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600">NETFLEX</div>
            <div className="min-h-screen text-white">
                <div className="mx-auto max-w-xl px-6 pt-28">
                    <h1 className="text-5xl font-bold leading-tight">
                    Enter your info to sign in
                    </h1>

                    <p className="mt-4 text-2xl text-gray-300">
                    Or get started with a new account.
                    </p>

                    <div className="mt-10 space-y-5">
                    <input
                        type="text"
                        placeholder="Email or mobile number"
                        className="w-full rounded border border-gray-600 bg-[#1a1212] px-5 py-5 text-lg text-white placeholder:text-gray-400 outline-none focus:border-white"
                    />

                    <button className="w-full cursor-pointer rounded bg-red-600 py-4 text-2xl font-semibold transition hover:bg-red-700">
                        Continue
                    </button>
                    </div>

                    <button className="mt-16 flex cursor-pointer items-center gap-2 text-2xl font-medium hover:underline">
                    Get Help
                    <span className="text-lg">⌄</span>
                    </button>

                    <p className="mt-16 text-lg text-gray-500">
                    This page is protected by Google reCAPTCHA to ensure you're not a
                    bot.
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Signup




