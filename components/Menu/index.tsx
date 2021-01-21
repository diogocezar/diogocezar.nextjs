import Link from "next/link";

const Menu = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <a href="#" className="nav-link">
            <span className="link-text logo-text">Menu</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
          </a>
        </li>
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="cat"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-book fa-w-14"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                  ></path>
                </g>
              </svg>
              <span className="link-text">Home</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            <a className="nav-link">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="cat"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-book fa-w-14"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                  ></path>
                </g>
              </svg>
              <span className="link-text">About</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/blog">
            <a className="nav-link">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="alien-monster"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M160,320h64V224H160Zm192-96v96h64V224Z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
              <span className="link-text">Blog</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/portfolio">
            <a className="nav-link">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="space-station-moon-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"
                  ></path>
                </g>
              </svg>
              <span className="link-text">Portfólio</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/educational">
            <a className="nav-link">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="space-shuttle"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
                  ></path>
                </g>
              </svg>
              <span className="link-text">Educational</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">
            <a className="nav-link">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="space-shuttle"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
                  ></path>
                </g>
              </svg>
              <span className="link-text">Contact</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
