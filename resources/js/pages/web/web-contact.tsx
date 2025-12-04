// resources/js/pages/welcome.tsx
import Contact2 from '@/components/blocks/contact/Contact2';
import WebLayout from '@/layouts/web-layout';

export default function WebContact() {
    return (
        <WebLayout title="Contact">
            <main className="">
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
