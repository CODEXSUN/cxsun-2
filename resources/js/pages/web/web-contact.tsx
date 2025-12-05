// resources/js/pages/welcome.tsx
import Contact2 from '@/components/blocks/contact/Contact2';
import WebLayout from '@/layouts/web-layout';

export default function WebContact() {
    return (
        <WebLayout title="Contact">
            <main className="">
                 <div className="relative flex h-[400px] w-full items-center justify-center">
                    {/* Background Image */}
                    <img
                        src="/images/home/slider/textile4.jpg"
                        alt="About hero image"
                        className="h-full w-full object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Text Content */}
                    <div className="absolute z-10 text-center text-white">
                        <h1 className="mb-3 text-4xl font-bold">About Us</h1>
                        <p className="px-[20%]">
                            Have an event in mind? Get in touch with our team
                            for catering, decoration, and complete event
                            management.
                        </p>
                    </div>
                </div>
        <Contact2
          addresses={`ALTEX LABS
Textile Testing Laboratory
Address: 20/1 S.A Kathar layout main road,
Angeripalayam road ,
Tiruppur-641602   Tamilnadu
`}
          email={[{ label: "info@altexlabs.in", value: "info@altexlabs.in" },{ label: "csk@altexlabs.in", value: "csk@altexlabs.in" }]}
          phone={[{ label: "+91 95666 46863", value: "919566646863" },{ label: "+91 95666 86062", value: "919566686062" }]}
          subTitle="Get In Touch With Us"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi error excepturi cum quod provident ipsam."
          serviceId={""}
          templateId={""}
          publicKey={""}
        />
      </main>
        </WebLayout>
    );
}
