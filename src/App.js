import { useEffect, useState } from "react";
function App() {
	const [step, setStep] = useState(1);
	const [isMontly, setIsmonthly] = useState(true);
	const [serviceCatagory, setServiceCatagory] = useState("");
	const [isOnlineCheked, setIsOnlineCheked] = useState(false);
	const [isStorageCheked, setStorageCheked] = useState(false);
	const [isProfileCheked, setProfileCheked] = useState(false);
	const [servicePrice, setServicePrice] = useState(0);
	const [isOnlineChekedPrice, setIsOnlineChekedPrice] = useState(0);
	const [isStorageChekedPrice, setIsStorageChekedPrice] = useState(0);
	const [isProfileChekedPrice, setIsProfileChekedPrice] = useState(0);
	const [total, setTotal] = useState(0);
	const [errors, setErrors] = useState({});

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	useEffect(() => {
		setTotal(
			isOnlineChekedPrice +
				isProfileChekedPrice +
				isStorageChekedPrice +
				servicePrice
		);
	}, [
		isOnlineChekedPrice,
		isProfileChekedPrice,
		isStorageChekedPrice,
		servicePrice,
	]);

	const handePriceForOnline = () => {
		if (isMontly) {
			setIsOnlineChekedPrice(1);
		} else {
			setIsOnlineChekedPrice(10);
		}
	};
	const handePriceForStorage = () => {
		if (isMontly) {
			setIsStorageChekedPrice(2);
		} else {
			setIsStorageChekedPrice(20);
		}
	};
	const handePriceForProfile = () => {
		if (isMontly) {
			setIsProfileChekedPrice(2);
		} else {
			setIsProfileChekedPrice(20);
		}
	};

	const nextStep = () => {
		let hasErrors = false; // Local flag to track validation errors

		const validate = (filed, fieldName, message) => {
			if (filed.length === 0) {
				setErrors((prevErrors) => ({
					...prevErrors,
					[fieldName]: message,
				}));
				hasErrors = true;
			} else {
				setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
			}
		};

		// Validate name
		validate(name, "name", "this filed is required");
		validate(email, "email", "this filed is required");
		validate(phone, "phone", "this filed is required");

		// Validate email

		// Validate phone

		if (serviceCatagory.length === 0) {
			if (step === 2) {
				setErrors((prevErrors) => ({
					...prevErrors,
					serviceCatagory: "Please Select catagory",
				}));
			}
		} else {
			setErrors((prevErrors) => ({
				...prevErrors,
				serviceCatagory: "",
			}));
		}

		if (step === 2) {
			if (serviceCatagory.length === 0) {
				setErrors((prevErrors) => ({
					...prevErrors,
					serviceCatagory: "Please Select catagory",
				}));
			} else {
				setErrors((prevErrors) => ({
					...prevErrors,
					serviceCatagory: "",
				}));
			}
		}
		// Only proceed to the next step if there are no errors
		if (!hasErrors) {
			if (step === 1) {
				setStep((prev) => prev + 1);
			}
		}

		if (serviceCatagory.length > 0) {
			if (step === 2) {
				setStep((prev) => prev + 1);
			}
		}

		if (!isOnlineCheked && !isProfileCheked && !isStorageCheked) {
			setErrors((prevErrors) => ({
				...prevErrors,
				err: "Please Select At least one ",
			}));
		} else {
			setErrors((prevErrors) => ({
				...prevErrors,
				err: "",
			}));
			setStep((prev) => prev + 1);
		}
	};

	const previousStep = () => {
		if (step > 1) {
			setStep((prev) => prev - 1);
		}
	};
	const handleServiceArcade = () => {
		if (isMontly) {
			setServicePrice(9);
		} else {
			setServicePrice(90);
		}
	};

	const handleServiceAdvanced = () => {
		if (isMontly) {
			setServicePrice(12);
		} else {
			setServicePrice(120);
		}
	};
	const handleServicePro = () => {
		if (isMontly) {
			setServicePrice(15);
		} else {
			setServicePrice(150);
		}
	};
	return (
		<div className="bg-[#EEF5FF] h-screen sm:flex  sm:items-center sm:justify-center">
			<div className="flex rounded-lg sm:shadow-2xl bg-[#EEF5FF] sm:justify-center flex-col  sm:p-4 sm:flex-row sm:bg-white">
				<div
					className=" h-[25vh] w-full  bg-repeat flex justify-center items-start pt-8 space-x-3 sm:hidden"
					style={{
						backgroundImage: "url('./images/bg-sidebar-mobile.svg')",
					}}>
					<button
						className={`${
							step === 1 ? "bg-[#BFE0FF]" : ""
						} rounded-full px-2  border font-bold`}>
						{" "}
						1
					</button>
					<button
						className={`${
							step === 2 ? "bg-[#BFE0FF]" : ""
						} rounded-full px-2  border font-bold`}>
						2
					</button>
					<button
						className={`${
							step === 3 ? "bg-[#BFE0FF]" : ""
						} rounded-full px-2  border font-bold`}>
						3
					</button>
					<button
						className={`${
							step === 4 || step === 5 ? "bg-[#BFE0FF]" : ""
						} rounded-full px-2  border font-bold`}>
						4
					</button>
				</div>
				<div
					style={{
						backgroundImage: "url('./images/bg-sidebar-desktop.svg')",
					}}
					className="hidden  sm:flex sm:flex-col space-y-7 p-10 rounded-lg">
					<div className="flex space-x-2 items-center justify-center sm:justify-start">
						<div>
							<button
								className={`${
									step === 1 ? "bg-[#BFE0FF]" : ""
								} rounded-full px-2  border font-bold`}>
								{" "}
								1
							</button>
						</div>
						<div>
							<p className=" uppercase text-slate-400">step 1 </p>
							<p className="text-white font-bold uppercase">your info</p>
						</div>
					</div>
					<div className="flex space-x-2 items-center justify-center">
						<div>
							<button
								className={`${
									step === 2 ? "bg-[#BFE0FF]" : ""
								} rounded-full px-2  border font-bold`}>
								{" "}
								2
							</button>
						</div>
						<div>
							<p className=" uppercase text-slate-400">step 2 </p>
							<p className="text-white font-bold uppercase">select your plan</p>
						</div>
					</div>
					<div className="flex space-x-2 items-center justify-start">
						<div>
							<button
								className={`${
									step === 3 ? "bg-[#BFE0FF]" : ""
								} rounded-full px-2  border font-bold`}>
								{" "}
								3
							</button>
						</div>
						<div>
							<p className=" uppercase text-slate-400">step 3 </p>
							<p className="text-white font-bold uppercase">add ons</p>
						</div>
					</div>

					<div className="flex space-x-2 items-center justify-start">
						<div>
							<button
								className={`${
									step === 4 || step === 5 ? "bg-[#BFE0FF]" : ""
								} rounded-full px-2  border font-bold`}>
								{" "}
								4
							</button>
						</div>
						<div>
							<p className=" uppercase text-slate-400">step 4 </p>
							<p className="text-white font-bold uppercase">summary</p>
						</div>
					</div>
				</div>

				<div className="p-4 relative">
					{/* Step one  */}

					{step === 1 && (
						<div className="bg-white rounded-lg -mt-[58px] sm:mt-0 flex flex-col p-8  space-y-4">
							<h2 className="text-[#042A56] font-bold text-3xl">
								Personal Info
							</h2>
							<p className="w-[275px] sm:w-full text-gray-400 font-semibold">
								Please Provide your name,email,Adress Phone Number
							</p>
							<div className="flex flex-col ">
								<div className="flex justify-between">
									<label className="text-[#042A56] font-semibold">Name</label>
									{errors.name && (
										<label className="text-red-500 text-sm!">
											{errors.name}
										</label>
									)}
								</div>
								<input
									type="text"
									placeholder="e.g. Stephen King"
									className="focus:outline-none border p-1.5 sm:p-3 rounded-lg px-4 focus:border-blue-700 "
									onChange={(e) => setName(e.target.value)}
									value={name}
								/>
							</div>
							<div className="flex flex-col ">
								<div className="flex justify-between">
									<label className="text-[#042A56] font-semibold">
										Email Adress
									</label>
									{errors.email && (
										<label className="text-red-500 text-sm!">
											{errors.email}
										</label>
									)}
								</div>
								<input
									type="text"
									className="focus:outline-none border p-1.5 sm:p-3 rounded-lg px-4 focus:border-blue-700"
									placeholder="e.g. Stephenkinge.lorem.com"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
								/>
							</div>
							<div className="flex flex-col ">
								<div className="flex justify-between">
									<label className="text-[#042A56] font-semibold">Phone</label>
									{errors.phone && (
										<label className="text-red-500 text-sm!">
											{errors.phone}
										</label>
									)}
								</div>
								<input
									type="text"
									value={phone}
									className="focus:outline-none border p-1.5 sm:p-3 rounded-lg px-4 focus:border-blue-700"
									placeholder="e.g. +1 234 567 89"
									onChange={(e) => setPhone(e.target.value)}
								/>
							</div>
						</div>
					)}

					{/* Step Two */}

					{step === 2 && (
						<div className="bg-white rounded-lg -mt-[58px] sm:mt-0 flex flex-col p-8  space-y-4 ">
							{errors.serviceCatagory && (
								<p className="text-red-400  text-sm">
									{errors.serviceCatagory}!
								</p>
							)}
							<h2 className="text-[#042A56] font-bold text-3xl">
								Select Your Plan
							</h2>
							<p className="w-[275px]  sm:w-full text-sm text-gray-400 font-semibold">
								You Have The Option of Monthely or Yearly biling
							</p>
							<div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-6">
								<div
									className={`flex sm:flex-col sm:space-y-7 sm:items-start sm:justify-start items-center space-x-3 sm:space-x-0 border ${
										serviceCatagory === "Arcade"
											? " bg-[#F8F9FE] border-[#0d4686] "
											: "bg-white"
									}  rounded-lg p-4 bg-[#F8F9FE]`}
									onClick={() => {
										setServiceCatagory("Arcade");
										handleServiceArcade();
									}}>
									<img src="./images/icon-arcade.svg" alt="" />
									<div className="flex flex-col space-y-0.5">
										<label className="text-[#042A56] font-bold">Arcade</label>
										{isMontly && <p className="text-sm text-gray-400">$9/mo</p>}
										{!isMontly && (
											<p className="text-sm text-gray-400">$90/yr</p>
										)}
										{!isMontly && (
											<p className="text-sm text-blue-800 font-semibold">
												2 months free
											</p>
										)}
									</div>
								</div>
								<div
									className={`flex sm:flex-col sm:space-y-7 sm:items-start sm:justify-start items-center space-x-3 sm:space-x-0 border ${
										serviceCatagory === "Advanced"
											? " bg-[#F8F9FE] border-[#0d4686] "
											: "bg-white"
									}  rounded-lg p-4 bg-[#F8F9FE]`}
									onClick={() => {
										setServiceCatagory("Advanced");
										handleServiceAdvanced();
									}}>
									<img src="./images/icon-Advanced.svg" alt="" />
									<div className="flex flex-col space-y-0.5">
										<label className="text-[#042A56] font-bold">Advanced</label>
										{isMontly && (
											<p className="text-sm text-gray-400">$12/mo</p>
										)}
										{!isMontly && (
											<p className="text-sm text-gray-400">$120/yr</p>
										)}
										{!isMontly && (
											<p className="text-sm text-blue-800 font-semibold">
												2 months free
											</p>
										)}
									</div>
								</div>
								<div
									className={`flex sm:flex-col sm:space-y-7 sm:items-start sm:justify-start items-center space-x-3 sm:space-x-0 border ${
										serviceCatagory === "Pro"
											? " bg-[#F8F9FE] border-[#0d4686] "
											: "bg-white"
									}  rounded-lg p-4 bg-[#F8F9FE]`}
									onClick={() => {
										setServiceCatagory("Pro");
										handleServicePro();
									}}>
									<img src="./images/icon-pro.svg" alt="" />
									<div className="flex flex-col space-y-0.5">
										<label className="text-[#042A56] font-bold">Pro</label>
										{isMontly && (
											<p className="text-sm text-gray-400">$15/mo</p>
										)}
										{!isMontly && (
											<p className="text-sm text-gray-400">$150/yr</p>
										)}
										{!isMontly && (
											<p className="text-sm text-blue-800 font-semibold">
												2 months free
											</p>
										)}
									</div>
								</div>
							</div>
						</div>
					)}

					{/* Step Theree */}
					{step === 3 && (
						<div className="bg-white rounded-lg -mt-[58px] sm:mt-0 flex flex-col p-8  space-y-4">
							<h2 className="text-[#042A56] font-bold text-3xl">
								Pick add-ons
							</h2>
							<p className="w-[275px]  sm:w-full text-sm text-gray-400 font-semibold">
								Add-ons help enhancing your gaming experience
							</p>
							<div className="flex flex-col space-y-3">
								<div
									className={`flex  items-center space-x-3 border justify-between rounded-lg p-4 ${
										isOnlineCheked ? " border-blue-700  bg-[#F8F9FE]" : ""
									}`}>
									<div className="flex items-center space-x-3 ">
										<input
											type="checkbox"
											className=" w-5 h-6"
											checked={isOnlineCheked}
											onChange={() => setIsOnlineCheked(!isOnlineCheked)}
											onClick={handePriceForOnline}
										/>
										<div className="flex flex-col space-y-0.5">
											<label className="text-[#042A56] font-bold">
												Online Service
											</label>
											<p className="text-sm text-gray-400">
												Acess to multiplayer Games
											</p>
										</div>
									</div>
									{isMontly && (
										<p className=" font-medium text-blue-600">+$1/mo</p>
									)}
									{!isMontly && (
										<p className=" font-medium text-blue-600">+$10/yr</p>
									)}
								</div>

								<div
									className={`flex  items-center space-x-3 border justify-between rounded-lg p-4  ${
										isStorageCheked ? " border-blue-700 bg-[#F8F9FE]" : ""
									}`}>
									<div className="flex items-center space-x-3 ">
										<input
											type="checkbox"
											className=" w-5 h-6"
											checked={isStorageCheked}
											onChange={() => setStorageCheked(!isStorageCheked)}
											onClick={handePriceForStorage}
										/>
										<div className="flex flex-col space-y-0.5">
											<label className="text-[#042A56] font-bold">
												Larger Storage
											</label>
											<p className="text-sm text-gray-400">
												Extra 1TB of cloud save
											</p>
										</div>
									</div>
									{isMontly && (
										<p className=" font-medium text-blue-600">+$2/mo</p>
									)}
									{!isMontly && (
										<p className=" font-medium text-blue-600">+$20/mo</p>
									)}
								</div>

								<div
									className={`flex  items-center space-x-3 border justify-between rounded-lg p-4  ${
										isProfileCheked ? " border-blue-700 bg-[#F8F9FE]" : ""
									}`}>
									<div className="flex items-center space-x-3 ">
										<input
											type="checkbox"
											className=" w-5 h-6"
											checked={isProfileCheked}
											onChange={() => setProfileCheked(!isProfileCheked)}
											onClick={handePriceForProfile}
										/>
										<div className="flex flex-col space-y-0.5">
											<label className="text-[#042A56] font-bold">
												Customizable Profile
											</label>
											<p className="text-sm text-gray-400">
												Custome Theme on Your Profile
											</p>
										</div>
									</div>
									{isMontly && (
										<p className=" font-medium text-blue-600">+$2/mo</p>
									)}
									{!isMontly && (
										<p className=" font-medium text-blue-600">+$20/mo</p>
									)}
								</div>
							</div>
						</div>
					)}

					{/* Step four */}

					{step === 4 && (
						<div className="bg-white rounded-lg -mt-[58px] sm:mt-0 flex flex-col p-8  space-y-4">
							<h2 className="text-[#042A56] font-bold text-3xl">
								Finishing Up
							</h2>
							<p className="w-[275px]  sm:w-full text-sm text-gray-400 font-semibold">
								Double-check everything looks Ok before comfirming
							</p>
							<div className="flex flex-col rounded-lg  bg-[#F8F9FE] p-4">
								<div className="flex  items-center space-x-3  justify-between  border-b pb-3">
									<div className="flex items-center space-x-3 ">
										<div className="flex flex-col space-y-0.5">
											<label className="text-[#042A56] font-bold">
												{serviceCatagory}
												{isMontly ? "(Monthly)" : "Yearly"}
											</label>
											<button
												className="text-sm text-gray-400 border-gray-400 w-fit  border-b-2"
												onClick={() => setStep(2)}>
												Change
											</button>
										</div>
									</div>
									<p className=" font-bold text-[#2a0d79ee]">
										${servicePrice}/{isMontly ? "mo" : "yr"}
									</p>
								</div>
								{isOnlineCheked && (
									<div className="flex  items-center space-x-3 pt-2 justify-between">
										<div className="flex items-center space-x-3 ">
											<div className="flex flex-col space-y-0.5">
												<label className="text-gray-400 font-normal">
													Online Service
												</label>
											</div>
										</div>
										<p className=" font-medium text-[#2a0d79ee]">
											+${isOnlineChekedPrice}/{isMontly ? "mo" : "yr"}
										</p>
									</div>
								)}
								{isStorageCheked && (
									<div className="flex mt-1 items-center space-x-3 justify-between">
										<div className="flex items-center space-x-3 ">
											<div className="flex flex-col space-y-0.5">
												<label className="text-gray-400 font-normal">
													Larger Storage
												</label>
											</div>
										</div>
										<p className=" font-medium text-[#2a0d79ee]">
											+${isStorageChekedPrice}/{isMontly ? "mo" : "yr"}
										</p>
									</div>
								)}
								{isProfileCheked && (
									<div className="flex mt-1 items-center space-x-3 justify-between">
										<div className="flex items-center space-x-3 ">
											<div className="flex flex-col space-y-0.5">
												<label className="text-gray-400 font-normal">
													Customizable Profile
												</label>
											</div>
										</div>
										<p className=" font-medium text-[#2a0d79ee]">
											+${isProfileChekedPrice}/{isMontly ? "mo" : "yr"}
										</p>
									</div>
								)}
							</div>
							<div className="flex items-center space-x-3 justify-between pl-3 pt-5">
								<div className="flex items-center space-x-3 ">
									<div className="flex flex-col space-y-0.5">
										<label className="text-gray-400 font-normal">
											Toltal {isMontly ? "(Per Month)" : "Per Year"}
										</label>
									</div>
								</div>
								<p className=" font-bold text-blue-700">
									+$
									{total}/{isMontly ? "mo" : "yr"}
								</p>
							</div>
						</div>
					)}
					{step === 5 && (
						<div className="bg-white rounded-lg   -mt-[58px] sm:mt-0 p-8">
							<div className="flex flex-col justify-center items-center space-y-3">
								<img src="./images/icon-thank-you.svg" alt="" />
								<h2 className="text-3xl font-bold text-[#110720]">
									Thank You!
								</h2>
							</div>
							<p className=" text-gray-500 mt-5 ">
								Thanks for confirming your subscription!
							</p>
							<p className="text-gray-500 text max-w-72">
								we hope you have fun using our platform.if you ever need
								support,please feelfree to email us at support@gmail.com
							</p>
						</div>
					)}
					{step < 5 && (
						<div
							className={` ${
								step === 1 ? "justify-end" : "justify-between"
							}  hidden  items-center bg-white h-[59px]  pb-5  pr-5 pl-5 pt-3 sm:flex`}>
							{step > 1 && (
								<button
									className="text-gray-400 hover:text-[#09071b] transition-colors duration-300"
									onClick={previousStep}>
									Go Back
								</button>
							)}

							{step < 4 && (
								<button
									className="bg-[#042A56] py-2 px-3 rounded-lg text-white hover:bg-opacity-80 duration-300 transition-colors"
									onClick={nextStep}>
									{" "}
									Next Step
								</button>
							)}
							{step === 4 && (
								<button
									className="bg-[#483EFF] py-2 px-3 rounded-lg text-white hover:bg-opacity-80 duration-300 transition-colors"
									onClick={nextStep}>
									{" "}
									Confirm
								</button>
							)}
						</div>
					)}
				</div>
				{step < 5 && (
					<div
						className={` ${
							step === 1 ? "justify-end" : "justify-between"
						}  flex  items-center bg-white h-[59px] fixed bottom-0 left-0 right-0  pb-5 pr-5 pl-5 pt-3 sm:hidden`}>
						{step > 1 && (
							<button
								className="text-gray-400 hover:text-[#09071b] transition-colors duration-300"
								onClick={previousStep}>
								Go Back
							</button>
						)}

						{step < 4 && (
							<button
								className="bg-[#042A56] py-2 px-3 rounded-lg text-white hover:bg-opacity-80 duration-300 transition-colors"
								onClick={nextStep}>
								{" "}
								Next Step
							</button>
						)}
						{step === 4 && (
							<button
								className="bg-[#483EFF] py-2 px-3 rounded-lg text-white hover:bg-opacity-80 duration-300 transition-colors"
								onClick={nextStep}>
								{" "}
								Confirm
							</button>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
