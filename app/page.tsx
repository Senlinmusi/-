'use client'
import { useEffect, useRef } from 'react'

export default function YX1() {
  const c = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    document.title = '1'
    const cv = c.current
    const v = cv?.getContext('2d')
    if (!v || !cv) return

    const yy = new Audio('/中国风.mp3')
    yy.loop = true
    const s1 = new Audio('/音效.wav')
    const s2 = new Audio('/音效2.wav')
    
    const BF1 = () => { 
      const s = Math.random() > 0.5 ? s1 : s2
      s.pause(); s.currentTime = 0; s.play().catch(() => {}) 
    }
    
    let ON1 = false, G1 = true, KS1 = false, QP1 = true, FX1 = 1
    let qx = 180, qy = 100, vx = 5, vy = 5, qr = 0, p1x = 180, p1y = 585, p2x = 180, p2y = 100, fsc = 0
    let DX1 = 0 
    let ZW1 = 180
    let WS1 = 0
    let MG1 = false

    const YY1 = () => { if (document.hidden) yy.pause() }
    document.addEventListener('visibilitychange', YY1)

    const ZY1 = (s: string) => { const i = new Image(); i.src = s; return i }
    const i = ZY1('/q.png'), i2 = ZY1('/q2.png'), j = ZY1('/p.png'), k = ZY1('/C1.png'), l = ZY1('/z.png'), r1 = ZY1('/return.png'), m1 = ZY1('/musicOn.png'), m2 = ZY1('/musicOff.png')

    const HH1 = (img: HTMLImageElement, x: number, y: number, sz: number, r: number = 0, fx: number = 1) => {
      const w = img.naturalWidth * sz, h = img.naturalHeight * sz
      v.save(); v.translate(x, y); v.scale(fx, 1); v.rotate(r); v.drawImage(img, -w / 2, -h / 2, w, h); v.restore()
    }

    const YX2 = () => {
      v.clearRect(0, 0, 360, 640)
      if (G1) {
        let er = Math.sin(Date.now() / 400) * 35
        let mbX = qx + er
        let SD1 = vy < 0 ? 0.14 : 0.08
        p2x += (mbX - p2x) * SD1
        p2x = Math.max(30, Math.min(330, p2x))
        FX1 = qx > p2x ? 1 : -1
      }
      if (KS1 && G1) {
        let nqx = qx + vx, nqy = qy + vy
        if (nqy > p1y - 30 && nqy < p1y + 30 && nqx > p1x - 65 && nqx < p1x + 65 && vy > 0) { 
          vy = -7; vx = (qx - p1x) * 0.12 + WS1 * 0.4; fsc += 1; BF1()
        } else if (nqy > 640) { G1 = false; if(ON1) yy.pause() }
        if (nqy < p2y + 50 && nqy > p2y - 50 && nqx > p2x - 65 && nqx < p2x + 65) { 
          if (vy < 0) {
            if (Math.random() < 0.25) {
              let hd = Math.PI * (0.1 + Math.random() * 0.8)
              let sd = 11
              vx = Math.cos(hd) * sd; vy = Math.sin(hd) * sd
            } else { vy = 7; vx = (qx - p2x) * 0.15 + (Math.random() - 0.5) * 4 }
            BF1()
          } else if (nqy < p2y) { vy = 7; BF1() }
        }
        qx += vx; qy += vy; qr += (vx + vy) * 0.1
        if (qx < 10) { qx = 10; vx = Math.abs(vx) }
        if (qx > 350) { qx = 350; vx = -Math.abs(vx) }
        if (qy < 10) { qy = 10; vy = Math.abs(vy); fsc += 5; DX1 = 1; BF1() }
      }
      HH1(l, 180, 350, 0.12); HH1(k, p2x, 100, 0.18, 0, FX1); HH1(j, p2x + (40 * FX1), p2y - 20, 0.15); HH1(QP1 ? i : i2, qx, qy, 0.05, qr); HH1(j, p1x, p1y, 0.15)
      v.strokeStyle = 'black'; v.lineWidth = 2; v.beginPath(); v.arc(35, 35, 14, 0, Math.PI * 2); v.stroke()
      HH1(ON1 ? m1 : m2, 35, 35, 0.02)
      v.beginPath(); v.arc(35, 75, 14, 0, Math.PI * 2); v.stroke()
      HH1(QP1 ? i2 : i, 35, 75, 0.02)
      v.fillStyle = 'white'; v.textAlign = 'right'; v.font = '36px sans-serif'; v.strokeText(`${fsc}`, 340, 50); v.fillText(`${fsc}`, 340, 50)
      if (DX1 > 0) {
        v.save(); v.globalAlpha = DX1; v.font = '24px sans-serif'; v.strokeText('+5', 340, 85); v.fillText('+5', 340, 85); v.restore(); DX1 -= 0.02
      }
      if (!G1) {
        v.fillStyle = 'rgba(0,0,0,0.5)'; v.fillRect(0, 0, 360, 640)
        v.fillStyle = 'white'; v.font = '36px sans-serif'; v.textAlign = 'center'
        v.fillText('Game Over', 180, 300); HH1(r1, 180, 380, 0.08)
      }
      WS1 = 0
      requestAnimationFrame(YX2)
    }

    const ZB1 = (cx: number, cy: number) => {
      const r = cv!.getBoundingClientRect()
      return { x: (cx - r.left) * (360 / r.width), y: (cy - r.top) * (640 / r.height) }
    }

    const CZ1 = (e: MouseEvent | TouchEvent) => {
      const { x, y } = ZB1('touches' in e ? e.touches[0].clientX : e.clientX, 'touches' in e ? e.touches[0].clientY : e.clientY)
      if (Math.hypot(x - 35, y - 35) < 40) { ON1 = !ON1; ON1 ? yy.play().catch(() => {}) : yy.pause() }
      else if (Math.hypot(x - 35, y - 75) < 40) { QP1 = !QP1 }
      else if (!G1 && Math.hypot(x - 180, y - 380) < 50) { G1 = true; KS1 = true; fsc = 0; qx = 180; qy = 100; vx = 5; vy = 5; p1x = 180; p1y = 585; DX1 = 0; ZW1 = 180 }
      else { MG1 = true; KS1 = true; if(ON1) yy.play().catch(() => {}); p1x = x; p1y = y; ZW1 = x }
    }

    const YD1 = (e: MouseEvent | TouchEvent) => {
      if (!MG1) return
      const { x, y } = ZB1('touches' in e ? e.touches[0].clientX : e.clientX, 'touches' in e ? e.touches[0].clientY : e.clientY)
      WS1 = x - ZW1; p1x = Math.max(0, Math.min(360, x)); p1y = Math.max(480, Math.min(640, y)); ZW1 = p1x
    }

    cv.addEventListener('mousedown', CZ1); window.addEventListener('mousemove', YD1); window.addEventListener('mouseup', () => MG1 = false)
    cv.addEventListener('touchstart', CZ1, { passive: false }); cv.addEventListener('touchmove', YD1, { passive: false }); cv.addEventListener('touchend', () => MG1 = false)
    i.onload = YX2
    return () => { 
      window.removeEventListener('mousemove', YD1); window.removeEventListener('mouseup', () => MG1 = false)
      yy.pause() 
    }
  }, [])

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#fafafa]">
      <div className="relative w-full h-full max-w-[360px] max-h-[640px] aspect-[9/16] shadow-2xl overflow-hidden bg-white">
        <canvas ref={c} width={360} height={640} className="w-full h-full block touch-none" style={{ touchAction: 'none' }} />
      </div>
    </div>
  )
}

