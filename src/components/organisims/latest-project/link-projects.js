import React, { useState } from "react";
import { Title, Tabs } from "components";

const LinkProjects = () => {

  return (
    <div className="container p-55-0 text-center" id="project">
      <Title className="text-bold font-large-xx ">Link Project</Title>
      <div className="profile-item">
        Coffee App :{" "}
        <a href="https://coffee-app-ssr.vercel.app" target="_blank">
          https://coffee-app-ssr.vercel.app
        </a>
      </div>
      <div className="profile-item">
        E-Government Solution :{" "}
        <a href="https://amspro.pallakastudio.com" target="_blank">
          https://amspro.pallakastudio.com
        </a>
      </div>
      <div className="profile-item">
        Sitinaja :{" "}
        <a href="https://sitinaja.pallakastudio.com" target="_blank">
          https://sitinaja.pallakastudio.com
        </a>
      </div>
      <div className="profile-item">
        Penerimaan Peserta Didik Baru :{" "}
        <a href="https://adpas.ayoppdb.id" target="_blank">
          https://adpas.ayoppdb.id
        </a>
      </div>
      <div className="profile-item">
        Media Berita Telegraph :{" "}
        <a href="https://telegraph.id" target="_blank">
          https://telegraph.id
        </a>
      </div>
      <div className="profile-item">
        Portal Aplikasi Kantor Balai Pelatihan Pertanian:{" "}
        <a href="http://evalap-bbppbatangkaluku.com" target="_blank">
          https://evalap-bbppbatangkaluku.com
        </a>
      </div>
      <div className="profile-item">
        Bank Data Pengajuan Skripsi Universita Neg. Makassar:{" "}
        <a href="https://sisbuk.com" target="_blank">
          https://sisbuk.com
        </a>
      </div>
      <div className="profile-item">
        Landing Page:{" "}
        <a href="https://landing-page-fajrin.netlify.app" target="_blank">
          https://landing-page-fajrin.netlify.app
        </a>
      </div>
    </div>
  );
};

export default LinkProjects;
