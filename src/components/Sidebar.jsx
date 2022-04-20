import {
  SidebarWrapper,
  SideMenu,
  Location,
  City,
} from "../styles/Sidebar.styled";

export default function SideBarNav() {
  return (
    <SidebarWrapper>
      <SideMenu>
        <SideMenu>
          <Location>
            <p>North TW</p>
            <City>
              <a href="#">Taipei</a>
              <a href="#">New Taipei City</a>
              <a href="#"></a>
              <a href="#">Hsinchu</a>
              <a href="#">Taoyuan</a>
            </City>
          </Location>
          <Location>
            <p>Central TW</p>
            <City>
              <a href="#">Taichung</a>
              <a href="#">Miaoli</a>
              <a href="#">Changhua</a>
              <a href="#">Nantou</a>
              <a href="#">Yunlin</a>
            </City>
          </Location>
          <Location>
            <p>South TW</p>
            <City>
              <a href="#">Chiayi</a>
              <a href="#">Kaohsiung</a>
              <a href="#">Tainan</a>
              <a href="#">Pingtung</a>
            </City>
          </Location>
          <Location>
            <p>East TW</p>
            <City>
              <a href="#">Yilan</a>
              <a href="#">Hualien</a>
              <a href="#">Taitung</a>
            </City>
          </Location>
          <Location>
            <p>Archipelago</p>
            <City>
              <a href="#">Hōko</a>
              <a href="#">Kinmen</a>
              <a href="#">Lienchiang</a>
            </City>
          </Location>
        </SideMenu>
      </SideMenu>
    </SidebarWrapper>
  );
}
