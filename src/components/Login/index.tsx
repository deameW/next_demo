import { useState } from 'react';
import CountDown from '../CountDown';
import { message } from 'antd';
import request from '@/service/fetch';
import styles from './index.module.scss';

interface Iprops {
  isShow: boolean;
  onClose: Function;
}
const Login = (props: Iprops) => {
  const [isShowVerifyCode, setIsShowVerifyCode] = useState(false);
  const [form, setForm] = useState({
    phone: '',
    verify: '',
  });
  const { isShow = false, onClose } = props;
  return (
    <>
      {isShow && (
        <div className={styles.loginArea}>
          <div className={styles.loginBox}>
            <div className={styles.loginTitle}>
              <div>手机号登陆</div>
              <div
                className={styles.close}
                onClick={() => {
                  //其他操作
                  onClose();
                }}
              >
                x
              </div>
            </div>
            <div>
              <input
                name="phone"
                type="text"
                placeholder="请输入手机号"
                value={form.phone}
                onChange={(e) => {
                  const { name, value } = e?.target;
                  setForm({
                    ...form,
                    [name]: value,
                  });
                }}
              />

              <div className={styles.verifyCodeArea}>
                <input
                  name="verify"
                  type="text"
                  placeholder="请输入验证码"
                  value={form.verify}
                  onChange={(e) => {
                    const { name, value } = e?.target;
                    setForm({
                      ...form,
                      [name]: value,
                    });
                  }}
                />

                <span
                  className={styles.verifyCode}
                  onClick={() => {
                    if (!form?.phone) {
                      message.warning('请输入手机号');
                      return;
                    }
                    request.post('/api/user/sendVerifyCode');
                    setIsShowVerifyCode(true);
                  }}
                >
                  {isShowVerifyCode ? <CountDown time={10} onEnd={() => {}} /> : '获取验证码'}
                </span>
              </div>
              <div className={styles.loginBtn} onClick={() => {}}>
                登录
              </div>
              <div className={styles.otherLogin} onClick={() => {}}>
                使用Github登录
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Login;
