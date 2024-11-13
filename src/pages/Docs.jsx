import Navbar from "../components/Navbar";
import screenshot1 from "./../assets/screen1.jpg";
import screenshot2 from "./../assets/screen2.jpg";
import screenshot3 from "./../assets/screen3.5.png";
import screenshot4 from "./../assets/screen4.jpg";

export default function Docs() {
  return (
    <div className=" bg-slate-700 min-h-44">
      <Navbar />
      <div className="mx-auto max-w-2xl px-9 py-32 sm:py-48 lg:py-56 flex flex-col gap-3 ">
        <h2 className="mt-2 text-pretty text-2xl font-semibold mb-4">
          Providing Key for Encryption
        </h2>

        <p className="text-justify ">
          A key must be provided to start the application, this key will be used
          to encrypt the credentials (it is important that the user remembers
          this key as it is necessary to decrypt the credentials in the future).
        </p>

        <img alt="Product screenshot" src={screenshot1} />

        <h2 className="mt-2 text-pretty text-2xl font-semibold mb-4">
          Encrypting the credentials
        </h2>

        <p className="text-justify ">
          On the “Encode” page, the user can provide their credentials, along
          with an image and the name that will be used to save the image
          generated with the encrypted credentials.
        </p>

        <p className="text-justify ">
          The key provided by the user in the previous step will be used to
          encrypt the credentials before they are hidden in the image.
        </p>

        <img alt="Product screenshot" src={screenshot2} />

        <h2 className="mt-2 text-pretty text-2xl font-semibold mb-4">
          Decrypting the credentials
        </h2>

        <p className="text-justify ">
          The user can select the image generated in the previous step to
          decrypt the credentials hidden in it, the same key provided when the
          application was launched will be used.
        </p>

        <img alt="Product screenshot" src={screenshot3} />


        <h2 className="mt-2 text-pretty text-2xl font-semibold mb-4">
          Changing the Secret Key
        </h2>

        <p className="text-justify ">
          The key can be changed, to encrypt or decrypt an image.
        </p>

        <img alt="Product screenshot" src={screenshot4} />
      </div>
    </div>
  );
}
