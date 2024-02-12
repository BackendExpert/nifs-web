import IonIcon from "@reacticons/ionicons"

const Contact = () => {
  return (
    <div className="container mx-auto px-10">
      <h1 className="text-center text-3xl font-semibold my-6">Contact Us</h1>
      <p className="text-2xl pb-2">Office Location</p>
      <hr className="mb-4"/>
      <div className="md:grid grid-cols-3 gap-4">
        <div className="">
          <p className="text-xl pb-2 font-semibold md:py-0 py-8">Headquarters</p>
          <div className="">
            <p>National Institute of Fundamental Studies</p>
            <p>Hanthana Road</p>
            <p>Kandy</p>
            <p>Sri Lanka</p>
            <div className="flex mt-4">
              <div className="pt-4">
                 <span><IonIcon name="call" size="large"/></span>              
              </div>
              <div className="pl-4">
                <p className="">[+94] 81 22 32 106</p>
                <p className="">[+94] 81 22 32 107</p>
                <p className="">[+94] 81 22 32 131</p>
              </div>
              </div>
              <div className="flex mt-4">
                <div className="">
                  <IonIcon name="mail" size="large"/>
                </div>
                <div className="pl-4">
                  <p className="">pophamard@nifs.ac.lk</p>
                </div>
              </div>            
          </div>
        </div>
        <div className="">
          <p className="text-xl pb-2 font-semibold md:py-0 py-8">Colombo Office</p>
          <div className="">
            <p>National Institute of Fundamental Studies</p>
            <p>No,380/71,72, Bauddhaloka Mawatha</p>
            <p>Colombo 07</p>
            <p>Sri Lanka</p>
          </div>
          <div className="flex mt-4">
              <div className="">
                 <span><IonIcon name="call" size="large"/></span>              
              </div>
              <div className="pl-4">
                <p className="">[+94] 11 26 97 538</p>
              </div>
          </div>
          <div className="flex mt-4">
            <div className="">
              <IonIcon name="mail" size="large"/>
            </div>
            <div className="px-4">
              <p className="">pophamard@nifs.ac.lk</p>
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-xl pb-2 font-semibold md:py-0 py-8">NIFS Sam Popham's Arboretum</p>
          <div className="">
            <p>Kandalama Road</p>
            <p>Damubulla</p>
            <p>Mathale</p>
            <p>Sri Lanka</p>
          </div>
          <div className="flex mt-4">
              <div className="">
                 <span><IonIcon name="call" size="large"/></span>              
              </div>
              <div className="pl-4">
                <p className="">[+94] 66 20 57 960</p>
              </div>
          </div>
          <div className="flex">
            <div className="">
              <IonIcon name="mail" size="large"/>
            </div>
            <div className="pl-4">
              <p className="">pophamard@nifs.ac.lk</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-2xl pb-2 mt-12">Enquiries</p>
      <hr className="mb-4"/>
      <div className="md:grid grid-cols-3 gap-4">
        <div className="">
          <p className="text-xl font-semibold pb-2 md:pt-0 pt-4">General enquiries</p>
          <p className="pl-6">info@nifs.ac.lk</p>
        </div>
        <div className="">
          <p className="text-xl font-semibold pb-2 md:pt-0 pt-4">Media enquiries</p>
          <p className="pl-6">media@nifs.ac.lk</p>
        </div>
        <div className="">
          <p className="text-xl font-semibold pb-2 md:pt-0 pt-4">Research enquiries</p>
          <p className="pl-6">research@nifs.ac.lk</p>
        </div>
        <div className="">
          <p className="text-xl font-semibold pb-2 md:pt-0 pt-4">Website enquiries</p>
          <p className="pl-6">web@nifs.ac.lk</p>
        </div>
        <div className="">
          <p className="text-xl font-semibold pb-2 md:pt-0 pt-4">Right to Information</p>
          <p className="pl-6">rti@nifs.ac.lk</p>
        </div>
      </div>
      <p className="text-2xl pb-2 mt-12">Social Media</p>
      <hr className="mb-4"/>
      <div className="md:grid grid-cols-4 gap-4 mb-12">
        <div className="">
          <div className="flex mt-4">
            <div className="">
              <IonIcon name="logo-facebook" size="large"/>
            </div>
            <div className="pl-2">
              <p className="text-xl">Facebook</p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex mt-4">
            <div className="">
              <IonIcon name="logo-twitter" size="large"/>
            </div>
            <div className="pl-2">
              <p className="text-xl">Twitter</p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex mt-4">
            <div className="">
              <IonIcon name="logo-instagram" size="large"/>
            </div>
            <div className="pl-2">
              <p className="text-xl">Instagram</p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex mt-4">
            <div className="">
              <IonIcon name="logo-youtube" size="large"/>
            </div>
            <div className="pl-2">
              <p className="text-xl">Youtube</p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex mt-4">
            <div className="">
              <IonIcon name="logo-linkedin" size="large"/>
            </div>
            <div className="pl-2">
              <p className="text-xl">Linkedin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact