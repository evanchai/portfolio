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
      <div className="dp-status">
        <span>9:41</span>
        <div className="dp-right">
          <span>●●●○</span>
          <span>▊</span>
        </div>
      </div>
      <div className="dp-body">{children}</div>
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

function PokerDemo() {
  return (
    <div className="dm-keys">
      <div className="dm-key" data-label="Cherry MX Blue">
        <div className="dm-keycap">A</div>
      </div>
      <div className="dm-key" data-label="Gateron Brown">
        <div className="dm-keycap">S</div>
      </div>
      <div className="dm-key" data-label="Holy Panda">
        <div className="dm-keycap">D</div>
      </div>
      <div className="dm-key" data-label="Topre 45g">
        <div className="dm-keycap">F</div>
      </div>
    </div>
  )
}

function AirwaveDemo() {
  return (
    <Phone className="dm-dark">
      <div className="dp-header">Airwave</div>
      <div className="dm-aw">
        <div className="dm-aw-card dm-aw-active">
          <div className="dm-aw-topic">The Future of AI</div>
          <div className="dm-aw-meta">AI · 3:42</div>
          <div className="dm-aw-wave">▁▂▃▅▂▇▅▃▂▅▇▃▁▂▅▃</div>
        </div>
        <div className="dm-aw-card">
          <div className="dm-aw-topic">Philosophy of Consciousness</div>
          <div className="dm-aw-meta">Philosophy · 4:15</div>
        </div>
        <div className="dm-aw-card">
          <div className="dm-aw-topic">Late Night Thoughts</div>
          <div className="dm-aw-meta">Casual · 2:58</div>
        </div>
      </div>
    </Phone>
  )
}

function TunesDemo() {
  return (
    <Phone className="dm-dark">
      <div className="dp-header">Tunes</div>
      <div className="dm-tunes">
        <div className="dm-tunes-album" />
        <div className="dm-tunes-song">Midnight Drive</div>
        <div className="dm-tunes-artist">Lo-Fi Beats</div>
        <div className="dm-tunes-progress">
          <div className="dm-tunes-bar"><div className="dm-tunes-fill" /></div>
          <div className="dm-tunes-times"><span>1:23</span><span>3:45</span></div>
        </div>
        <div className="dm-tunes-ctrl">
          <span>⏮</span>
          <span className="dm-tunes-play">▶</span>
          <span>⏭</span>
        </div>
        <div className="dm-tunes-next">
          <div className="dm-tunes-label">Up Next</div>
          <div className="dm-tunes-qi"><span>Sunset Boulevard</span><span className="dm-tunes-qa">Chill Hop</span></div>
          <div className="dm-tunes-qi"><span>Ocean Drive</span><span className="dm-tunes-qa">Synthwave</span></div>
        </div>
      </div>
    </Phone>
  )
}
