

function Header(){
    return(
      
        <header>
          
          <nav className="menu">
            <a href="#main" className="menu__button btn">
              <span className="menu__line menu__line_top"></span>
              <span className="menu__line menu__line_right"></span>
              <span className="menu__line menu__line_bottom"></span>
              <span className="menu__line menu__line_left"></span>
              <span>Основы</span>
            </a>

            <a href="#start" className="menu__button btn">
              <span className="menu__line menu__line_top"></span>
              <span className="menu__line menu__line_right"></span>
              <span className="menu__line menu__line_bottom"></span>
              <span className="menu__line menu__line_left"></span>
              <span>Старт</span>
            </a>

            <a href="#builds" className="menu__button btn">
              <span className="menu__line menu__line_top"></span>
              <span className="menu__line menu__line_right"></span>
              <span className="menu__line menu__line_bottom"></span>
              <span className="menu__line menu__line_left"></span>
              <span>Билды</span>
            </a>

            <a href="#atlas" className="menu__button btn">
              <span className="menu__line menu__line_top"></span>
              <span className="menu__line menu__line_right"></span>
              <span className="menu__line menu__line_bottom"></span>
              <span className="menu__line menu__line_left"></span>
              <span>Атлас</span>
            </a>

            

            <a href="#farm" className="menu__button btn">
              <span className="menu__line menu__line_top"></span>
              <span className="menu__line menu__line_right"></span>
              <span className="menu__line menu__line_bottom"></span>
              <span className="menu__line menu__line_left"></span>
              <span>Фарм</span>
            </a>

            
          </nav>

          <div className="vector"></div>


        </header>
    )
}

export default Header