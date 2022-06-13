const useCookie = () => {

    const setCookie = (key, value, expires, path) => {
        if (key) {
            let cookieString = `${key}=${value}`

            if (expires)
                cookieString += `; expires=${expires.toGMTString()}`

            if (path)
                cookieString += `; path=${path}`

            document.cookie = cookieString
        }
    }


    const delCookie = (key, path = '/') => {
        if (key)
            document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`
    }

    const getCookie = (key) => {
        let name = key + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    return {
        setCookie,
        delCookie,
        getCookie
    }
}

export default useCookie