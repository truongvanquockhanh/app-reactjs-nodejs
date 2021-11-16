import React from "react";
import Introduction from "../components/introduction";
import LanCan from "../components/lancan";
import Sat from "../components/cuasat";
import SoNhom from "../components/sonhom";
import CauThangSat from "../components/cauthangsat";
import KinhBep from "../components/kinhbep";
import KinhCuongLuc from "../components/kinhcuongluc";
import TitleHome from "../components/titlehome";
import Diquay from "../components/diquay";
import Sohat from "../components/sohat";
import Sotruot from "../components/sotruot";
import Maihien from "../components/maihien";
import Backeo from "../components/backeo";
import Cuakeo from "../components/cuakeo";
import Cuacong from "../components/cuacong";
import Ditruot from "../components/ditruot";

function Home() {
    return (
        <div>
            <div className='home'>
                <Introduction />
            </div>
            <TitleHome />
            <Diquay />
            <Ditruot />
            <SoNhom />
            <Sohat />
            <Sotruot />
            <LanCan />
            <CauThangSat />
            <Sat />
            <Cuacong />
            <KinhBep />
            <Cuakeo />
            <KinhCuongLuc />
            <Maihien />
            <Backeo />
        </div>
    )
}

export default Home;