import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <ul>
          <li className={css.navItem}>
            <NavLink to="/" className={css.navLink}>
              Home
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink to="/movies" className={css.navLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <div className={css.container}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
};

export default Layout;
