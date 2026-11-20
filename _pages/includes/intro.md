<section class="hp-intro" id="about">
  <header class="hp-profile">
    <div class="hp-intro__photo">
      {% assign photo = site.author.photos | first %}
      <img class="hp-photo" src="{{ photo.src | relative_url }}" alt="{{ photo.alt }}" width="132" height="132" />
    </div>
    <div class="hp-profile__id">
      <h1 class="hp-name">Shihao Weng <span class="hp-name__zh">翁诗浩</span></h1>
      <p class="hp-role"><span><img class="hp-role__logo hp-role__logo--nju" src="{{ '/images/NJU-logo.svg' | relative_url }}" alt="" width="14" height="17" />Ph.D. Student, Nanjing University</span><span><img class="hp-role__logo hp-role__logo--bytedance" src="{{ '/images/ByteDance-logo.svg' | relative_url }}" alt="" width="18" height="17" />Research Intern, ByteDance</span></p>
      <nav class="hp-links" aria-label="Profiles">
        <a href="mailto:shweng@smail.nju.edu.cn"><i class="fas fa-envelope" aria-hidden="true"></i>Email</a>
        <a href="{{ site.author.cv | relative_url }}"><i class="fas fa-file-alt" aria-hidden="true"></i>CV</a>
        <a href="{{ site.author.googlescholar }}" rel="external"><i class="fas fa-graduation-cap" aria-hidden="true"></i>Scholar</a>
        <a href="https://github.com/{{ site.author.github }}" rel="external"><i class="fab fa-github" aria-hidden="true"></i>GitHub</a>
      </nav>
    </div>
  </header>
  <div class="hp-intro__text">
    <p>
      I am a third-year Ph.D. student at <a class="hp-org" href="https://www.nju.edu.cn/en/" rel="external">Nanjing University</a>, advised by <a href="https://fengyang-nju.github.io/" rel="external">Prof.&nbsp;Yang Feng</a>. Currently, I&nbsp;am a research intern at <a class="hp-org" href="https://www.bytedance.com/en/" rel="external">ByteDance</a> and a visiting student at the <a class="hp-org" href="https://www.cuhk.edu.hk/" rel="external">Chinese University of Hong Kong</a> with <a href="https://www.cse.cuhk.edu.hk/lyu/home" rel="external">Prof.&nbsp;Michael R.&nbsp;Lyu</a>. Before that, I&nbsp;spent a year at <a class="hp-org" href="https://smu.edu.sg/" rel="external">Singapore Management University</a> working with <a href="https://xiaofeixie.bitbucket.io" rel="external">Prof.&nbsp;Xiaofei Xie</a>.
    </p>
    <p>
      My research is on <strong>trustworthy AI</strong>: making AI reliable, secure, verifiable, and aligned as it takes on ever larger roles in science and society.
    </p>
    <p class="hp-note">Feel free to reach out at <a href="mailto:shweng@smail.nju.edu.cn">shweng@smail.nju.edu.cn</a> to chat about research or&nbsp;collaboration.</p>
  </div>
</section>
