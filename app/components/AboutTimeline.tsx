"use client";

import {useState, useEffect, useRef} from "react";
import { contain } from "three/src/extras/TextureUtils.js";

export function  Services() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const services = [
        {idx:1,title:"Backend Developer",text:"I am a backend developer"},
        {idx:2,title:"AI/ML Developer",text:"I build AI enabled products like chatbots and automated platforms"},
        {idx:3,title:"Frontend Developer",text:"I build premium looking and catchy user interfaces"},
        {idx:4,title:"Mobile Developer",text:"I build cross platoform apps to run natively on Android, iOS, Windows and more"},
        {idx:5,title:"Cloud Services",text:"I can deploy services to cloud platforms like Microsoft Azure, Google cloud, Vercel, etc"},
    ];
    
    useEffect(()=>{
        const container = containerRef.current;
        const content = contentRef.current
        if (!container || !content){
            return ;
        }

        let target=0;
        let current=0;
        let raf=0;

        const maxScroll = () =>{
            return content.scrollHeight - container.clientHeight;
        }

        const animate = () => {
            current += (target-current) * 0.12;
            container.scrollTop = current;

            if (Math.abs(target-current) > 0.5){
                raf = requestAnimationFrame(animate);
            }else{
                current=target;
                container.scrollTop = target;
                raf=0;
            }
        }
        const onWheel =(e:WheelEvent) => {
            const rect = container.getBoundingClientRect();
            const max = maxScroll();

            target += e.deltaY;
            target = Math.max(0,Math.min(target,max));
            let nextTarget = target + e.deltaY;
            if ((nextTarget>= 0) && (nextTarget <= max)){
                e.preventDefault();
                target = nextTarget;
            }

            if (!raf){
                raf = requestAnimationFrame(animate);
            }
        };   
        window.addEventListener("wheel", onWheel, { passive: false });
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("wheel", onWheel);
        };
    }, []);
    return  (
        <div ref={containerRef} className="services-list">
            <div ref={contentRef} className="services-content">
            {services.map((s) => (
                <div key={s.idx} className="service-card">
                    <h3 className="services-title">
                        {s.title}
                    </h3>
                    <p className="services-text">
                        {s.text}
                    </p>
                </div>
            ))}
              <div className="services-end-spacer" />
            </div>
        </div>
    );
}

