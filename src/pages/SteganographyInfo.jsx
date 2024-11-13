import Navbar from "../components/Navbar";

export default function SteganographyInfo() {
  return (
    <div className=" bg-slate-700 min-h-44">
      <Navbar />
      <div className="mx-auto max-w-2xl px-9 md:px-4 py-32 sm:py-48 lg:py-56 flex flex-col gap-3 items-center">
        <h2 className="mt-2 text-pretty text-4xl font-semibold mb-4">
          What is Steganography
        </h2>

        <p className="text-justify ">
          Steganography (/ˌstɛɡəˈnɒɡrəfi/ ⓘ STEG-ə-NOG-rə-fee) is the practice
          of representing information within another message or physical object,
          in such a manner that the presence of the concealed information would
          not be evident to an unsuspecting person&apos;s examination. In
          computing/electronic contexts, a computer file, message, image, or
          video is concealed within another file, message, image, or video. The
          word steganography comes from Greek steganographia, which combines the
          words steganós (στεγανός), meaning &quot;covered or concealed&quot;,
          and -graphia (γραφή) meaning &quot;writing&quot;.
        </p>

        <p className="text-justify">
          The first recorded use of the term was in 1499 by Johannes Trithemius
          in his Steganographia, a treatise on cryptography and steganography,
          disguised as a book on magic. Generally, the hidden messages appear to
          be (or to be part of) something else: images, articles, shopping
          lists, or some other cover text. For example, the hidden message may
          be in invisible ink between the visible lines of a private letter.
          Some implementations of steganography that lack a formal shared secret
          are forms of security through obscurity, while key-dependent
          steganographic schemes try to adhere to Kerckhoffs&apos;s principle.
        </p>

        <p className="text-justify">
          The advantage of steganography over cryptography alone is that the
          intended secret message does not attract attention to itself as an
          object of scrutiny. Plainly visible encrypted messages, no matter how
          unbreakable they are, arouse interest and may in themselves be
          incriminating in countries in which encryption is illegal. Whereas
          cryptography is the practice of protecting the contents of a message
          alone, steganography is concerned with concealing both the fact that a
          secret message is being sent and its contents.
        </p>

        <p className="text-justify">
          Steganography includes the concealment of information within computer
          files. In digital steganography, electronic communications may include
          steganographic coding inside of a transport layer, such as a document
          file, image file, program, or protocol. Media files are ideal for
          steganographic transmission because of their large size. For example,
          a sender might start with an innocuous image file and adjust the color
          of every hundredth pixel to correspond to a letter in the alphabet.
          The change is so subtle that someone who is not specifically looking
          for it is unlikely to notice the change.
        </p>

        <a
          href="https://en.wikipedia.org/wiki/Steganography"
          target="_blank"
          className="text-sm/6 font-semibold text-gray-300 hover:text-blue-400"
        >
          See More <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
