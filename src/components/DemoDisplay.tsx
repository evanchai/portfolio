import './demos.css'

export const DemoDisplay: React.FC<{ slug: string }> = ({ slug }) => {
  const demos: Record<string, () => React.JSX.Element> = {
    aime: AimeDemo, plat: PlatDemo, museo: MuseoDemo,
    logos: LogosDemo, poker: PokerDemo, airwave: AirwaveDemo, tunes: TunesDemo,
  }
  const Demo = demos[slug]
  return Demo ? <Demo /> : null
}

function Phone({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`demo-phone${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  )
}

/* ── aime: Instagram-style chat, white bg, blue gradient user bubbles ── */
function AimeDemo() {
  return (
    <Phone className="dm-aime">
      <div className="dm-aime-header">
        <img src="/images/aime.jpg" alt="Ning" className="dm-aime-hdr-avatar" />
        <div className="dm-aime-hdr-info">
          <div className="dm-aime-hdr-name">Ning</div>
          <div className="dm-aime-hdr-status">Active now</div>
        </div>
        <div className="dm-aime-hdr-dot" />
      </div>
      <div className="dm-chat">
        <div className="dm-msg dm-sent">
          <div className="dm-bubble">你好啊 最近在干嘛</div>
        </div>
        <div className="dm-msg dm-recv">
          <img src="/images/aime.jpg" alt="" className="dm-msg-avatar" />
          <div className="dm-bubble">写代码呢，你呢？又来找我聊天了 😏</div>
        </div>
        <div className="dm-msg dm-sent">
          <div className="dm-bubble">哈哈 想你了</div>
        </div>
        <div className="dm-msg dm-recv">
          <img src="/images/aime.jpg" alt="" className="dm-msg-avatar" />
          <div className="dm-bubble">少来，说吧什么事</div>
        </div>
      </div>
      <div className="dm-input-area">
        <div className="dm-input-wrap">
          <span className="dm-placeholder">Message...</span>
        </div>
        <span className="dm-send-text">Send</span>
      </div>
    </Phone>
  )
}

/* ── logos: God theme, gold colors, large centered avatar ── */
function LogosDemo() {
  return (
    <Phone className="dm-logos">
      <div className="dm-logos-top">
        <div className="dm-logos-avatar">✦</div>
        <div className="dm-logos-name">God</div>
      </div>
      <div className="dm-chat">
        <div className="dm-msg dm-sent">
          <div className="dm-bubble">What is the meaning of suffering?</div>
        </div>
        <div className="dm-msg dm-recv">
          <div className="dm-msg-avatar-icon">✦</div>
          <div className="dm-bubble">Suffering is not punishment, my child. It is the soil in which compassion grows.</div>
        </div>
        <div className="dm-msg dm-sent">
          <div className="dm-bubble">Why does it have to hurt?</div>
        </div>
        <div className="dm-msg dm-recv">
          <div className="dm-msg-avatar-icon">✦</div>
          <div className="dm-bubble">Because the heart that cannot break is a heart that cannot love.</div>
        </div>
      </div>
      <div className="dm-input-area">
        <div className="dm-input-wrap">
          <span className="dm-placeholder">Ask a question...</span>
        </div>
        <span className="dm-send-text">Send</span>
      </div>
    </Phone>
  )
}

/* ── plat, museo, poker, airwave, tunes: unchanged ── */

/* ── plat: Light theme, menu results view with category tabs + dish cards ── */
function PlatDemo() {
  return (
    <Phone className="dm-plat">
      <div className="dm-plat-header">
        <div className="dm-plat-logo">Plat<span>.</span></div>
        <div className="dm-plat-restaurant">Ichiran Ramen · Shibuya</div>
      </div>
      <div className="dm-plat-tabs">
        <span className="dm-plat-tab active">Main</span>
        <span className="dm-plat-tab">Noodles</span>
        <span className="dm-plat-tab">Sides</span>
        <span className="dm-plat-tab">Drinks</span>
      </div>
      <div className="dm-plat-list">
        <div className="dm-plat-card">
          <div className="dm-plat-card-top">
            <div>
              <div className="dm-plat-name">Fried Chicken</div>
              <div className="dm-plat-orig">鳥の唐揚げ</div>
            </div>
            <div className="dm-plat-price">¥880</div>
          </div>
          <div className="dm-plat-desc">Japanese-style deep-fried chicken, marinated in soy &amp; ginger</div>
        </div>
        <div className="dm-plat-card">
          <div className="dm-plat-card-top">
            <div>
              <div className="dm-plat-name">Miso Ramen</div>
              <div className="dm-plat-orig">味噌ラーメン</div>
            </div>
            <div className="dm-plat-price">¥950</div>
          </div>
          <div className="dm-plat-desc">Rich miso broth with noodles, chashu pork, soft-boiled egg</div>
        </div>
        <div className="dm-plat-card">
          <div className="dm-plat-card-top">
            <div>
              <div className="dm-plat-name">Assorted Tempura</div>
              <div className="dm-plat-orig">天ぷら盛り合わせ</div>
            </div>
            <div className="dm-plat-price">¥1,200</div>
          </div>
          <div className="dm-plat-desc">Light-battered shrimp, sweet potato, eggplant, green beans</div>
        </div>
      </div>
    </Phone>
  )
}

/* ── museo: Minimalist gallery, artwork in white frame + serif analysis ── */
function MuseoDemo() {
  return (
    <Phone className="dm-museo">
      <div className="dm-museo-header">
        <div className="dm-museo-logo"><span>M</span></div>
      </div>
      <div className="dm-museo-body">
        <div className="dm-museo-frame">
          <img src="/images/monet.jpg" alt="Water Lilies" className="dm-museo-art" />
        </div>
        <div className="dm-museo-divider" />
        <div className="dm-museo-analysis">
          <div className="dm-museo-text">Soft, dissolving brushstrokes blur the boundary between water and sky. <em>Water lilies</em> float across a shimmering surface, their reflections merging with clouds above — a meditation on light, color, and the passage of time.</div>
        </div>
      </div>
    </Phone>
  )
}

/* ── poker: Dark chassis, 2×2 neon keycap grid (faithful to MechKeys) ── */
function PokerDemo() {
  return (
    <div className="dm-poker">
      <div className="dm-poker-grid">
        <div className="dm-pk dm-pk-q"><span>给我擦皮鞋</span></div>
        <div className="dm-pk dm-pk-w"><span>我要验牌</span></div>
        <div className="dm-pk dm-pk-e"><span>牌没有问题</span></div>
        <div className="dm-pk dm-pk-r"><span>随机</span></div>
      </div>
    </div>
  )
}

/* ── airwave: Premium dark podcast player with cover art + waveform ── */
function AirwaveDemo() {
  return (
    <Phone className="dm-airwave">
      <div className="dm-aw-header">
        <div className="dm-aw-dot" />
        <span className="dm-aw-brand">AIRWAVE</span>
      </div>
      <div className="dm-aw-body">
        <div className="dm-aw-cover">
          <span className="dm-aw-dur">12:30</span>
        </div>
        <div className="dm-aw-title">The Future of AI Agents</div>
        <div className="dm-aw-sub">AI Weekly · 2.4k plays</div>
        <div className="dm-aw-bars">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="dm-aw-bar" style={{ animationDelay: `${i * 0.06}s` }} />
          ))}
        </div>
        <div className="dm-aw-prog">
          <span>3:42</span>
          <div className="dm-aw-pbar"><div className="dm-aw-pfill" /></div>
          <span>12:30</span>
        </div>
        <div className="dm-aw-ctrl">
          <span className="dm-aw-skip">⏮</span>
          <div className="dm-aw-play">▶</div>
          <span className="dm-aw-skip">⏭</span>
        </div>
      </div>
    </Phone>
  )
}

/* ── tunes: iPod Classic with metallic body, screen, click wheel ── */
function TunesDemo() {
  return (
    <div className="dm-ipod">
      <div className="dm-ipod-top">Tunes</div>
      <div className="dm-ipod-screen">
        <div className="dm-ipod-np">
          <span>Now Playing</span>
          <span className="dm-ipod-idx">01 / 12</span>
        </div>
        <div className="dm-ipod-vis">
          <div className="dm-ipod-eq">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="dm-ipod-eqbar" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
        <div className="dm-ipod-track">
          <div className="dm-ipod-song">Midnight Drive</div>
          <div className="dm-ipod-artist">Lo-Fi Beats</div>
        </div>
      </div>
      <div className="dm-ipod-wheel">
        <span className="dm-wh-t">MENU</span>
        <span className="dm-wh-l">◀◀</span>
        <span className="dm-wh-r">▶▶</span>
        <span className="dm-wh-b">▶ ||</span>
        <div className="dm-wh-center">♥</div>
      </div>
    </div>
  )
}
