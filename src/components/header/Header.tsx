"use client";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { decrementCounter } from "@/lib/redux/slices/countSlice";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useAppDispatch();
  const { count, loading } = useAppSelector((state) => state.count);

  return (
    <header className="h-full flex items-center justify-center text-black bg-slate-400 flex-col">
      <p>Header</p>
      <p>{loading ? "Loading..." : count}</p>
      <button
        className="active:text-teal-400"
        onClick={() => dispatch(decrementCounter(1))}
      >
        Counter on Page Builder
      </button>
    </header>
  );
};

export default Header;
