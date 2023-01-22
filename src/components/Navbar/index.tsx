import type { NextPage } from 'next';
import Link from 'next/link';
import { navs } from './config';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import { Button } from 'antd';
import { useState } from 'react';
import Login from '../Login';

const Navbar: NextPage = () => {
  const { pathname } = useRouter();
  const [isShowLogin, setIsShowLogin] = useState(false);
  return (
    <div className={styles.navbar}>
      <section className={styles.logoArea}>BLOG-WQ</section>
      <section className={styles.linkArea}>
        {navs?.map((nav) => {
          return (
            <Link key={nav?.label} href={nav?.value} legacyBehavior>
              <a className={pathname == nav.value ? styles.active : ''}>{nav?.label}</a>
            </Link>
          );
        })}
      </section>
      <section className={styles.operationArea}>
        <Button onClick={() => {}}>写文章</Button>
        <Button
          type="primary"
          onClick={() => {
            //触发登录弹窗的组件
            setIsShowLogin(true);
          }}
        >
          登录
        </Button>
      </section>
      <Login
        isShow={isShowLogin}
        onClose={() => {
          setIsShowLogin(false);
        }}
      />
    </div>
  );
};
export default Navbar;
