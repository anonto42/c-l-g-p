import React from 'react'

const Home = () => {

  const hePic= [
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/420626434_344488128411211_6767612565160676981_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGaBkCGIXOrDgWaUqg_cU8fFCUCOz4_qMgUJQI7Pj-oyJFDcGkSILbfQpZyUwiTlT-1jLowb3ys2pq4Qti_5MK8&_nc_ohc=cpv9ndflYHcAX9hQdMZ&_nc_ht=scontent.fdac138-1.fna&oh=00_AfCCxricEf3_R9h-yjztlzCwePgCJOYT4rKHqsiS7adjcw&oe=65D75F6F",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/409303587_320863130773711_1462360847251007041_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeGBWu2opil5VxXeYbTuFl1rnO0hJStutNac7SElK2601ghx_9eC39AJnD4DzvAARY1fw1asqvKd6p5rB98oSDV4&_nc_ohc=w71sUBreP18AX_acnxU&_nc_ht=scontent.fdac138-2.fna&oh=00_AfBgmfYe_hkJs2ksXtNpd4XEUPp3BzbsGTr4Iu8hYjhL5A&oe=65D64D7E",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/352515276_219040324289326_4578761927610197637_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeGDpH_dOnnUWUwDqc_3slGB4j2LM-MvKoTiPYsz4y8qhPX4LI5qhXN8NRQ4SCgS64r37N9u88mIlU0bD19W310-&_nc_ohc=KFWmcfTSK50AX_3gYcr&_nc_ht=scontent.fdac138-1.fna&oh=00_AfAzG65epLbhWjzl-0TSUKa_DRFgZkvMtx69zY_OP3QFTw&oe=65D70AE5",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/334567085_2428363740673669_2240630382548062823_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeEs2ff06ILYVgE2EjMKF-bia9OiYP_YBapr06Jg_9gFqp0B2UUzHDSE3eszQ0Z5G_9bG2h9cuQM1z-CWc0uI2H7&_nc_ohc=EgzgN-orvKMAX8iNuKo&_nc_ht=scontent.fdac138-1.fna&oh=00_AfDnJCD3e7glgQNS7L6Ht8oNo1jGh0a6D5b1VCxNONssvQ&oe=65D6E566",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/326465277_1605388503252981_7710885738121300693_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeEh_xQhTDfozxiP20dkpe8Rk5re8eXfIoWTmt7x5d8ihY1bHI-eYIRfFvLBg4WO2sFF_pfCQO6WI7sA7VzA0zJB&_nc_ohc=srNN1UFMCNoAX-a88eT&_nc_ht=scontent.fdac138-1.fna&oh=00_AfAj4OlS9Vm4_e-VUd2hLu0GZkA7PShxAMppLjzjbMcs1w&oe=65D61B6A",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/316681164_130090836517609_3068115942337366017_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeE_fgMa1Qofz5iirTB-t6rrRh4Jf79jQXtGHgl_v2NBeyey2WHa79m_vAMQHLOBtQBCnP5AOQTSl4JHNsBUc0GK&_nc_ohc=jUR5ghDzXPoAX8ElV4Y&_nc_ht=scontent.fdac138-1.fna&oh=00_AfBRoRhmrY2t3givEOmEu9WVvt4QMSA57eEa4xaw-z9MFg&oe=65D675AC",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/312840625_122514207275272_5753309726689918700_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeEmkgW9WpfV2thPtEKO7A-spZPMzpvYxxmlk8zOm9jHGeRHZMpTXoTTlHEAcvzdGl-u1EBux8O7LbHsX3b12JeM&_nc_ohc=N49B85XTTdIAX8as4bm&_nc_oc=AQnNpJH9m6Op8HXjY1Kr-qOjqhGbBU7UzkLeudOyhjTaoNLqhNBQGeK-CosO2VmAlMc&_nc_ht=scontent.fdac138-1.fna&oh=00_AfC-wqZLuM_cJHI_m8_6wv-Ak5Swiw0DdWeF8NhIceZoBw&oe=65D6A79D"
  ];
  let numCount = 0;

  return (
    <div className=' w-full h-svh bg-[#282A37] inline-flex justify-center'>

    {/* Hero section */}
      <div className='w-[75%] bg-slate-500 h-[60vh] rounded-md mt-8 inline-flex justify-center'>

        <i class="fa-solid fa-arrow-left"></i>

        <img src={hePic[3]} />

        <i class="fa-solid fa-arrow-right"></i>

      </div>

    </div>
  )
}

export default Home