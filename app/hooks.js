import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useForm = (defaultValues) => (handler) => async (event) => {
  event.preventDefault();
  event.persist();

  const form = event.target;
  const elements = Array.from(form.elements)
    .filter((element) => element.hasAttribute("name"))
    .reduce(
      (object, element) => ({
        ...object,
        [`${element.getAttribute("name")}`]: element.value,
      }),
      defaultValues
    );
  await handler(data);
  form.reset();
};

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const handler = (...args) => savedCallback.current?.(...args);

    if (delay !== null) {
      const id = setInterval(handler, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const useAppDispatch = useDispatch;

export const useAppSelector = useSelector;
