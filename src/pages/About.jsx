import React from "react";
import avatar from "../assets/avatar.jpg";

const About = () => {
  return (
    <div className="flex items-center gap-2">
      <img className="w-[500px] flex-1" src={avatar} alt="" />
      <div className="flex-1 p-10">
        <p>
          Merhaba! Ben Esra, Hacettepe Üniversitesi Okul Öncesi Eğitimi Bölümü
          öğrencisiyim. Çocuklarla çalışmaya olan tutkum ve onların eğitimine
          katkıda bulunma arzum, beni bu alanda ilerlemeye motive ediyor.
        </p>{" "}
        <p>
          {" "}
          Küçük yaşlardan itibaren çocuklarla vakit geçirmeyi ve onların
          gelişimine katkıda bulunmayı seviyorum. Onların merakını ve keşfetme
          isteğini desteklemek, benim için büyük bir keyif ve sorumluluktur. Bu
          nedenle, okul öncesi eğitim alanında kendimi geliştirmek ve daha fazla
          bilgi edinmek için Hacettepe Üniversitesi'nde eğitimime devam
          etmekteyim.
        </p>{" "}
        <p>
          {" "}
          Eğitim hayatım boyunca, çocukların bireysel farklılıklarını anlamak ve
          onlara uygun öğrenme ortamları oluşturmak konusunda bilgi ve deneyim
          kazandım. Ayrıca, eğitim teknolojileri ve yenilikçi öğretim yöntemleri
          üzerine çalışmalar yaparak, çocukların öğrenme süreçlerini
          desteklemeye yönelik çözümler aramaktayım.
        </p>
        <p>
          Amacım, çocukların güvenli, destekleyici ve ilham verici bir öğrenme
          ortamında gelişimlerini en üst düzeye çıkarmak ve onlara ilham vermek.
          Bu doğrultuda, eğitimime ve kişisel gelişimime devam ederek, gelecekte
          çocukların hayatlarında pozitif bir etki bırakmayı hedefliyorum.
          Sevgiyle kalın!
        </p>
      </div>
    </div>
  );
};

export default About;
