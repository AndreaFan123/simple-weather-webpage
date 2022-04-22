import { SideBarNav } from "../styles/SidebarNav.styled";

export default function SideBar({ open }) {
  return (
    <SideBarNav open={open}>
      <div>
        <h2>North TW</h2>
        <a href="#">Taipei</a>
        <a href="#">New Taipei City</a>
        <a href="#">Taoyuan</a>
        <a href="#">Hsinchu</a>
        <a href="#">Miaoli</a>
      </div>
      <div>
        <h2>Central TW</h2>
        <a href="#">Taichung</a>
        <a href="#">Yunlin</a>
        <a href="#">Nantou</a>
        <a href="#">Changhua</a>
      </div>
      <div>
        <h2>South TW</h2>
        <a href="#">Chiayi</a>
        <a href="#">Tainan</a>
        <a href="#">Pingtung</a>
      </div>
      <div>
        <h2>East TW</h2>
        <a href="#">Yilan</a>
        <a href="#">Hualien</a>
        <a href="#">Taitung</a>
      </div>
      <div>
        <h2>Iland</h2>
        <a href="#">Kinmen</a>
        <a href="#">Penhu</a>
        <a href="#">Lienchiang</a>
      </div>
    </SideBarNav>
  );
}
