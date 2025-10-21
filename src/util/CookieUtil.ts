export function cookieString(
  cname: string,
  cvalue: string,
  expire: Date,
  domain?: string,
) {
  const expires = `expires=${expire.toUTCString()}`;
  return `${cname}=${cvalue};${expires};SameSite=Lax;${
    domain ? `Domain=${domain};` : ''
  }path=/`;
}

export function setCookie(
  cname: string,
  cvalue: string,
  expire: Date,
  domain: string,
) {
  document.cookie = cookieString(cname, cvalue, expire, domain);
}

export function rmCookie(cname: string, domain: string) {
  setCookie(cname, '', new Date(0), domain);
}

export function getCookie(cname: string) {
  const name = `${cname}=`;
  const ca = document.cookie.split(';');
  for (const element of ca) {
    let c = element;
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

export function checkCookie(cname: string) {
  const user = getCookie(cname);
  return !!user && user !== '';
}
