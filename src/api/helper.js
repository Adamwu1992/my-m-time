const resp = {
  code: '00000000',
  success: true,
  data: null
}

const errorResp = {
  code: '99999999',
  success: false,
  data: null
}

export function resolve(data, delay = 1000) {
  return new Promise(_resolve => {
    setTimeout(() => {
      _resolve({
        ...resp,
        data
      });
    }, delay);
  });
}

export function reject(data, delay = 200) {
  return new Promise((_, _reject) => {
    setTimeout(() => {
      _reject({
        ...errorResp,
        data
      });
    }, delay);
  });
}