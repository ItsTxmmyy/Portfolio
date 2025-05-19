"use client";

import React, { useRef, useEffect } from "react";
import { useMousePosition } from "@app/hooks/mouseposition";

interface ParticlesProps {
	className?: string;
	quantity?: number;
	staticity?: number;
	ease?: number;
	refresh?: boolean;
}

type Circle = {
	x: number;
	y: number;
	translateX: number;
	translateY: number;
	size: number;
	alpha: number;
	targetAlpha: number;
	dx: number;
	dy: number;
	magnetism: number;
};

export default function Particles({
	className = "",
	quantity = 30,
	staticity = 50,
	ease = 50,
	refresh = false,
}: ParticlesProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const context = useRef<CanvasRenderingContext2D | null>(null);
	const circles = useRef<Circle[]>([]);
	const mousePosition = useMousePosition();
	const mouse = useRef({ x: 0, y: 0 });
	const canvasSize = useRef({ w: 0, h: 0 });

	const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

	useEffect(() => {
		if (!canvasRef.current) return;
		context.current = canvasRef.current.getContext("2d");
		initCanvas();
		requestAnimationFrame(animate);

		window.addEventListener("resize", initCanvas);
		return () => {
			window.removeEventListener("resize", initCanvas);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		updateMouse();
	}, [mousePosition]);

	useEffect(() => {
		initCanvas();
	}, [refresh]);

	const updateMouse = () => {
		if (!canvasRef.current) return;
		const rect = canvasRef.current.getBoundingClientRect();
		const { w, h } = canvasSize.current;
		const x = mousePosition.x - rect.left - w / 2;
		const y = mousePosition.y - rect.top - h / 2;
		const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
		if (inside) {
			mouse.current.x = x;
			mouse.current.y = y;
		}
	};

	const initCanvas = () => {
		resizeCanvas();
		drawParticles();
	};

	const resizeCanvas = () => {
		const canvas = canvasRef.current;
		const container = containerRef.current;
		if (!canvas || !container || !context.current) return;

		circles.current = [];

		const width = container.offsetWidth;
		const height = container.offsetHeight;

		canvasSize.current = { w: width, h: height };

		canvas.width = width * dpr;
		canvas.height = height * dpr;
		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;

		context.current.setTransform(1, 0, 0, 1, 0, 0);
		context.current.scale(dpr, dpr);
	};

	const circleParams = (): Circle => {
		const { w, h } = canvasSize.current;
		return {
			x: Math.random() * w,
			y: Math.random() * h,
			translateX: 0,
			translateY: 0,
			size: Math.random() * 2 + 0.1,
			alpha: 0,
			targetAlpha: Math.random() * 0.6 + 0.1,
			dx: (Math.random() - 0.5) * 0.2,
			dy: (Math.random() - 0.5) * 0.2,
			magnetism: 0.1 + Math.random() * 4,
		};
	};

	const drawCircle = (circle: Circle, update = false) => {
		if (!context.current) return;

		const { x, y, translateX, translateY, size, alpha } = circle;

		context.current.translate(translateX, translateY);
		context.current.beginPath();
		context.current.arc(x, y, size, 0, 2 * Math.PI);
		context.current.fillStyle = `rgba(255, 255, 255, ${alpha})`;
		context.current.fill();
		context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

		if (!update) circles.current.push(circle);
	};

	const clearContext = () => {
		if (context.current) {
			context.current.clearRect(
				0,
				0,
				canvasSize.current.w,
				canvasSize.current.h,
			);
		}
	};

	const drawParticles = () => {
		clearContext();
		for (let i = 0; i < quantity; i++) {
			drawCircle(circleParams());
		}
	};

	const remapValue = (
		value: number,
		start1: number,
		end1: number,
		start2: number,
		end2: number,
	): number => {
		return Math.max(((value - start1) * (end2 - start2)) / (end1 - start1) + start2, 0);
	};

	const animate = () => {
		clearContext();

		const { w, h } = canvasSize.current;

		for (let i = circles.current.length - 1; i >= 0; i--) {
			const circle = circles.current[i];

			const edgeDistances = [
				circle.x + circle.translateX - circle.size,
				w - circle.x - circle.translateX - circle.size,
				circle.y + circle.translateY - circle.size,
				h - circle.y - circle.translateY - circle.size,
			];

			const closestEdge = Math.min(...edgeDistances);
			const remapClosestEdge = remapValue(closestEdge, 0, 20, 0, 1);

			circle.alpha = Math.min(circle.targetAlpha, circle.targetAlpha * remapClosestEdge);

			circle.x += circle.dx;
			circle.y += circle.dy;

			circle.translateX +=
				(mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease;
			circle.translateY +=
				(mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease;

			const outOfBounds =
				circle.x < -circle.size ||
				circle.x > w + circle.size ||
				circle.y < -circle.size ||
				circle.y > h + circle.size;

			if (outOfBounds) {
				circles.current.splice(i, 1);
				drawCircle(circleParams());
			} else {
				drawCircle(circle, true);
			}
		}

		requestAnimationFrame(animate);
	};

	return (
		<div className={className} ref={containerRef} aria-hidden="true">
			<canvas ref={canvasRef} />
		</div>
	);
}