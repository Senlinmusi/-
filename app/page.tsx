'use client'
import { useEffect, useRef } from 'react'

export default function YX1() {
  const c = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    document.title = '1'
    const v = c.current?.getContext('2d')
    if (!v || !c.current) return

    const yy = new Audio('/中国风.mp3')
    yy.loop = true
    
    let ON1 = false, G1 = true, KS1 = false
    let qx = 180, qy = 100, vx = 4, vy = 4, qr = 0, p1x = 180, p2x = 180, p2y = 100, fsc = 0

    const YY1 = () => {
      if (document.hidden) yy.pause()
    }
    document.addEventListener('visibilitychange', YY1)

    const ZY1 = (s: string) => { const i = new Image(); i.src = s; return i }
    const i = ZY1('/q.png'), j = ZY1('/p.png'), k = ZY1('/C1.png'), l = ZY1('/z.png'), r1 = ZY1('/return.png'), m1 = ZY1('/musicOn.png'), m2 = ZY1('/musicOff.png')

    const HH1 = (img: HTMLImageElement, x: number, y: number, sz: number, r: number = 0) => {
      const w = img.naturalWidth * sz, h = img.naturalHeight * sz
      v.save(); v.translate(x, y); v.rotate(r); v.drawImage(img, -w / 2, -h / 2, w, h); v.restore()
    }

    const YX2 = () => {
      v.clearRect(0, 0, 360, 640)
      if (KS1 && G1) {
        qy += vy; qx += vx; qr += (vx + vy) * 0.1
        if (qx < 0 || qx > 360) vx *= -1
        if (qy > 540 && Math.abs(qx - p1x) < 50) { vy = -12; vx = (qx - p1x) * 0.2; fsc += 1 } 
        else if (qy > 640) { G1 = false; yy.pause() }
        p2x += (qx + vx * 2 - p2x) * 0.25 
        if (qy < 100) { vy = 12; vx = (Math.random() - 0.5) * 8 }
      }
      HH1(l, 180, 350, 0.12); HH1(k, p2x, 100, 0.18); HH1(j, p2x + 40, p2y - 20, 0.15); HH1(i, qx, qy, 0.05, qr); HH1(j, p1x, 585, 0.15)
      v.strokeStyle = 'black'; v.lineWidth = 2; v.beginPath(); v.arc(35, 35, 14, 0, Math.PI * 2); v.stroke()
      HH1(ON1 ? m1 : m2, 35, 35, 0.02)
      v.fillStyle = 'white'; v.textAlign = 'right'; v.font = '36px Zpix'; v.strokeText(`${fsc}`, 340, 50); v.fillText(`${fsc}`, 340, 50)
      
      if (!G1) {
        v.fillStyle = 'rgba(0,0,0,0.5)'; v.fillRect(0, 0, 360, 640)
        v.fillStyle = 'white'; v.font = '36px Zpix'; v.textAlign = 'center'
        v.fillText('Game Over', 180, 300)
        HH1(r1, 180, 380, 0.08)
      }
      requestAnimationFrame(YX2)
    }

    const ZB1 = (ex: number, ey: number) => {
      const rect = c.current!.getBoundingClientRect()
      return { x: (ex - rect.left) * (360 / rect.width), y: (ey - rect.top) * (640 / rect.height) }
    }

    const CZ1 = (e: TouchEvent) => {
      const { x, y } = ZB1(e.touches[0].clientX, e.touches[0].clientY)
      if (Math.hypot(x - 35, y - 35) < 30) {
        ON1 = !ON1
        ON1 ? yy.play().catch(() => {}) : yy.pause()
      } else if (!G1 && Math.hypot(x - 180, y - 380) < 50) { 
        G1 = true; KS1 = true; fsc = 0; qx = 180; qy = 100; vx = 4; vy = 4; p1x = 180
        if (ON1) yy.play().catch(() => {})
      } else if (!KS1) { 
        KS1 = true
        if(ON1) yy.play().catch(() => {})
      } else if (G1) { p1x = x }
    }

    window.addEventListener('touchstart', CZ1)
    window.addEventListener('touchmove', (e) => { 
      const { x } = ZB1(e.touches[0].clientX, e.touches[0].clientY)
      if (KS1 && G1) p1x = x 
    })
    
    i.onload = YX2
    
    return () => { 
      document.removeEventListener('visibilitychange', YY1)
      window.removeEventListener('touchstart', CZ1)
      yy.pause()
    }
  }, [])

  return <canvas ref={c} width={360} height={640} className="w-full h-full bg-white touch-none" />
}

