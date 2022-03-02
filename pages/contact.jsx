/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/no-unescaped-entities
import Head from "next/head";
import Snackbar from "@windui/snackbar";
export default function Home() {
  const contactForm = async (event) => {
    event.preventDefault();
    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    if (result.status) {
      event.target.reset();
      new Snackbar({
        options: {
          duration: 3000,
          speed: 500,
          type: "success",
          align: "right",
          position: "bottom",
        },
        title: "Success",
        message: "We received your submission, thank you!.",
      }).show();
    } else if (result.error === "401") {
      new Snackbar({
        options: {
          duration: 3000,
          speed: 500,
          type: "error",
          align: "right",
          position: "bottom",
        },
        title: "The form could not be submitted",
        message: "Please fill in all fields.",
      }).show();
    } else {
      new Snackbar({
        options: {
          duration: 3000,
          speed: 500,
          type: "error",
          align: "right",
          position: "bottom",
        },
        title: "Error",
        message: "An unexpected error has occurred, please try again later.",
      }).show();
    }
  };
  return (
    <>
      <div>
        <Head>
          <title>Roxza.Me - Contact</title>
        </Head>

        <main>
          <div className="w-full my-5">
            <h1 className="text-3xl text-white font-bold text-center">
              Contact
            </h1>
            <h6 className="uppercase text-gray-400 text-sm text-center mb-3">
              YOU CAN CONTACT ME BY FILLING OUT THE FIELDS BELOW.
            </h6>
            <div className="w-full px-5 float-right">
              <form id="contact" onSubmit={contactForm}>
                <label
                  className="mx-auto block lg:w-1/2 md:w-2/3 w-full text-sm opacity-75"
                  htmlFor="email"
                >
                  E-Mail:
                </label>
                <input
                  type="email"
                  name="email"
                  className="py-2 px-4 text-sm text-white mx-auto block input lg:w-1/2 md:w-2/3 focus:outline-none rounded-md w-full"
                  placeholder="xxx@gmail.com"
                />
                <label
                  className="mt-3 mx-auto block lg:w-1/2 md:w-2/3 w-full text-sm opacity-75"
                  htmlFor="email"
                >
                  Name:
                </label>
                <input
                  name="name"
                  type="text"
                  className="py-2 px-4 text-sm text-white mx-auto block input lg:w-1/2 md:w-2/3 focus:outline-none rounded-md w-full"
                  placeholder="Roxza"
                />
                <label
                  className="mt-3 mx-auto block lg:w-1/2 md:w-2/3 w-full text-sm opacity-75"
                  htmlFor="email"
                >
                  Description:
                </label>
                <textarea
                  name="message"
                  type="text"
                  placeholder="Description"
                  className="color-white py-2 px-4 text-sm text-white mx-auto block input lg:w-1/2 md:w-2/3 focus:outline-none rounded-md w-full"
                ></textarea>
                <div className="flex items-center justify-center mt-5">
                  <button type="submit">
                    <a className="submt w-25 cursor-pointer py-1.5 px-3 rounded-md border-2 border-white  hover:text-black transition duration-300 text-white font-semibold">
                      Submit
                    </a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
