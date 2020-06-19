﻿using System;
using System.Collections.Generic;

namespace QLVT1.DAL.Models
{
    public partial class Muontra
    {
        public int MaMt { get; set; }
        public int? MaThe { get; set; }
        public DateTime Ngaymuon { get; set; }

        public virtual Thethuvien MaTheNavigation { get; set; }
    }
}
