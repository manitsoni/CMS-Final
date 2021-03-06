USE [CargovioDb]
GO
/****** Object:  Table [dbo].[CargoStatusType]    Script Date: 3/30/2021 6:05:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CargoStatusType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[StatusName] [nvarchar](50) NULL,
	[IsActive] [bit] NULL,
 CONSTRAINT [PK_CargoStatusType] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CompanyDetails]    Script Date: 3/30/2021 6:05:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompanyDetails](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[CompanyName] [nvarchar](50) NOT NULL,
	[WebSiteLink] [nvarchar](70) NULL,
	[CompanySize] [int] NULL,
	[CopmanyAddress1] [nvarchar](50) NOT NULL,
	[CopmanyAddress2] [nvarchar](50) NOT NULL,
	[City] [nvarchar](50) NOT NULL,
	[State] [nvarchar](50) NOT NULL,
	[Country] [nvarchar](50) NOT NULL,
	[IsActive] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
 CONSTRAINT [PK_CompanyDetails] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Office]    Script Date: 3/30/2021 6:05:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Office](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[BranchLocation] [nvarchar](50) NOT NULL,
	[City] [nvarchar](50) NOT NULL,
	[State] [nvarchar](50) NOT NULL,
	[Country] [nvarchar](50) NOT NULL,
	[IsActive] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
 CONSTRAINT [PK_Office] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RateData]    Script Date: 3/30/2021 6:05:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RateData](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[SourceCity] [varchar](50) NULL,
	[SourceState] [varchar](50) NULL,
	[SourceCountry] [varchar](50) NULL,
	[DestinationCity] [varchar](50) NULL,
	[DestinationState] [varchar](50) NULL,
	[DestinationCountry] [varchar](50) NULL,
	[Quantity] [int] NULL,
	[Weight] [decimal](3, 2) NULL,
	[Rate] [decimal](3, 2) NULL,
	[IsActive] [bit] NULL,
	[CreatedDate] [datetime] NULL,
 CONSTRAINT [PK_Rates] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblBooking]    Script Date: 3/30/2021 6:05:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblBooking](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Userid] [int] NULL,
	[SourceId] [int] NULL,
	[DestinationId] [int] NULL,
	[PackageDetailsId] [int] NULL,
	[Amount] [money] NULL,
	[PaymentType] [nvarchar](max) NULL,
	[TransactionId] [varchar](max) NULL,
	[OfficeId] [int] NULL,
	[ShipmentId] [nvarchar](15) NULL,
	[CreatedBy] [int] NULL,
	[UpdatedBy] [int] NULL,
	[IsActive] [bit] NULL,
	[IsPickUp] [bit] NULL,
	[IsDelivered] [bit] NULL,
	[CreatedDate] [datetime] NULL,
	[UpdatedDate] [datetime] NULL,
	[IsCurrent] [bit] NULL,
 CONSTRAINT [PK_tblBooking] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblDestination]    Script Date: 3/30/2021 6:05:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblDestination](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Userid] [int] NULL,
	[CustomerName] [nvarchar](max) NULL,
	[Emailid] [nvarchar](max) NULL,
	[Phone] [nvarchar](max) NULL,
	[CompanyName] [nvarchar](max) NULL,
	[DestinationAddress1] [nvarchar](max) NULL,
	[DestinationAddress2] [nvarchar](max) NULL,
	[DestinationPincode] [nvarchar](max) NULL,
	[DestinationCity] [nvarchar](max) NULL,
	[DestinationState] [nvarchar](max) NULL,
	[DestinationCountry] [nvarchar](max) NULL,
	[DestinationDocumentName] [nvarchar](max) NULL,
	[DestinationDocumentNumber] [nvarchar](max) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
 CONSTRAINT [PK_tblDestination] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblLatLong]    Script Date: 3/30/2021 6:05:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblLatLong](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CityName] [varchar](50) NULL,
	[LatAddress] [varchar](50) NULL,
	[LongAddress] [varchar](50) NULL,
	[IsActive] [bit] NULL,
 CONSTRAINT [PK_tblLatLong] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblPackageDetails]    Script Date: 3/30/2021 6:05:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblPackageDetails](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NULL,
	[Packagename] [nvarchar](max) NULL,
	[Quantity] [int] NULL,
	[Weight] [int] NULL,
	[Lenght] [int] NULL,
	[Height] [int] NULL,
	[Width] [int] NULL,
	[CreatedBy] [int] NULL,
	[IsActive] [bit] NULL,
 CONSTRAINT [PK_tblPackageDetails] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblQuotation]    Script Date: 3/30/2021 6:05:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblQuotation](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NULL,
	[OfficeId] [int] NULL,
	[SourceAddress1] [nvarchar](max) NULL,
	[SourceAddress2] [nvarchar](max) NULL,
	[SourcePincode] [nvarchar](max) NULL,
	[SourceCity] [nvarchar](max) NULL,
	[SourceState] [nvarchar](max) NULL,
	[SourceCountry] [nvarchar](max) NULL,
	[DestinationAddress1] [nvarchar](max) NULL,
	[DestinationAddress2] [nvarchar](max) NULL,
	[DestinationCity] [nvarchar](max) NULL,
	[DestinationState] [nvarchar](max) NULL,
	[DestinationCountry] [nvarchar](max) NULL,
	[DestinationPincode] [nvarchar](max) NULL,
	[PackageDeatilsId] [int] NULL,
	[Amount] [decimal](10, 2) NULL,
	[CreateBy] [int] NULL,
	[UpdatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[UpdatedDate] [datetime] NULL,
	[IsActive] [bit] NULL,
 CONSTRAINT [PK_tblQuotation] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblSource]    Script Date: 3/30/2021 6:05:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblSource](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Userid] [int] NULL,
	[Customername] [nvarchar](max) NULL,
	[Emailid] [nvarchar](max) NULL,
	[Phone] [nvarchar](max) NULL,
	[CompanyName] [nvarchar](max) NULL,
	[SourceAddress1] [nvarchar](max) NULL,
	[SourceAddress2] [nvarchar](max) NULL,
	[SourcePincode] [nvarchar](max) NULL,
	[SourceCity] [nvarchar](max) NULL,
	[SourceState] [nvarchar](max) NULL,
	[SourceCountry] [nvarchar](max) NULL,
	[SourceDocumentName] [nvarchar](max) NULL,
	[SourceDocumentNumber] [nvarchar](max) NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
 CONSTRAINT [PK_tblSource] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tracking]    Script Date: 3/30/2021 6:05:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tracking](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[BookingId] [int] NULL,
	[CargoStatusTypeId] [int] NULL,
	[CurrentLocation] [nvarchar](50) NULL,
	[IsDelivered] [bit] NULL,
	[IsActive] [bit] NULL,
	[CreatedBy] [int] NULL,
	[UpdatedBy] [int] NULL,
	[IsCurrent] [bit] NULL,
 CONSTRAINT [PK_Tracking] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserRegistration]    Script Date: 3/30/2021 6:05:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRegistration](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](50) NOT NULL,
	[Email] [nvarchar](150) NOT NULL,
	[ContactNo] [nvarchar](13) NOT NULL,
	[UserTypeId] [int] NOT NULL,
	[OfficeId] [int] NULL,
	[Addressline1] [nvarchar](50) NOT NULL,
	[Addressline2] [nvarchar](50) NOT NULL,
	[City] [nvarchar](50) NOT NULL,
	[State] [nvarchar](50) NOT NULL,
	[Country] [nvarchar](50) NOT NULL,
	[PinCode] [nvarchar](6) NOT NULL,
	[IsActive] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[IsVerify] [bit] NULL,
 CONSTRAINT [PK_tblUserRegistration] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserType]    Script Date: 3/30/2021 6:05:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Usertypename] [varchar](max) NOT NULL,
	[isActive] [bit] NOT NULL,
 CONSTRAINT [PK_tblUserType] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[CompanyDetails] ADD  CONSTRAINT [DF_CompanyDetails_IsActive]  DEFAULT ((0)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Office] ADD  CONSTRAINT [DF_Office_IsActive]  DEFAULT ((0)) FOR [IsActive]
GO
ALTER TABLE [dbo].[UserRegistration] ADD  CONSTRAINT [DF_tblUserRegistration_IsActive]  DEFAULT ((0)) FOR [IsActive]
GO
ALTER TABLE [dbo].[UserType] ADD  CONSTRAINT [DF_tblUserType_isActive]  DEFAULT ((0)) FOR [isActive]
GO
ALTER TABLE [dbo].[CompanyDetails]  WITH CHECK ADD  CONSTRAINT [FK_CompanyDetails_UserRegistration] FOREIGN KEY([UserId])
REFERENCES [dbo].[UserRegistration] ([Id])
GO
ALTER TABLE [dbo].[CompanyDetails] CHECK CONSTRAINT [FK_CompanyDetails_UserRegistration]
GO
ALTER TABLE [dbo].[Office]  WITH CHECK ADD  CONSTRAINT [FK_Office_UserRegistration] FOREIGN KEY([UserId])
REFERENCES [dbo].[UserRegistration] ([Id])
GO
ALTER TABLE [dbo].[Office] CHECK CONSTRAINT [FK_Office_UserRegistration]
GO
ALTER TABLE [dbo].[tblBooking]  WITH CHECK ADD  CONSTRAINT [FK_tblBooking_Office] FOREIGN KEY([OfficeId])
REFERENCES [dbo].[Office] ([Id])
GO
ALTER TABLE [dbo].[tblBooking] CHECK CONSTRAINT [FK_tblBooking_Office]
GO
ALTER TABLE [dbo].[tblBooking]  WITH CHECK ADD  CONSTRAINT [FK_tblBooking_tblDestination] FOREIGN KEY([DestinationId])
REFERENCES [dbo].[tblDestination] ([ID])
GO
ALTER TABLE [dbo].[tblBooking] CHECK CONSTRAINT [FK_tblBooking_tblDestination]
GO
ALTER TABLE [dbo].[tblBooking]  WITH CHECK ADD  CONSTRAINT [FK_tblBooking_tblPackageDetails] FOREIGN KEY([PackageDetailsId])
REFERENCES [dbo].[tblPackageDetails] ([Id])
GO
ALTER TABLE [dbo].[tblBooking] CHECK CONSTRAINT [FK_tblBooking_tblPackageDetails]
GO
ALTER TABLE [dbo].[tblBooking]  WITH CHECK ADD  CONSTRAINT [FK_tblBooking_tblSource] FOREIGN KEY([SourceId])
REFERENCES [dbo].[tblSource] ([ID])
GO
ALTER TABLE [dbo].[tblBooking] CHECK CONSTRAINT [FK_tblBooking_tblSource]
GO
ALTER TABLE [dbo].[tblBooking]  WITH CHECK ADD  CONSTRAINT [FK_tblBooking_UserRegistration] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[UserRegistration] ([Id])
GO
ALTER TABLE [dbo].[tblBooking] CHECK CONSTRAINT [FK_tblBooking_UserRegistration]
GO
ALTER TABLE [dbo].[tblBooking]  WITH CHECK ADD  CONSTRAINT [FK_tblBooking_UserRegistration1] FOREIGN KEY([UpdatedBy])
REFERENCES [dbo].[UserRegistration] ([Id])
GO
ALTER TABLE [dbo].[tblBooking] CHECK CONSTRAINT [FK_tblBooking_UserRegistration1]
GO
ALTER TABLE [dbo].[tblPackageDetails]  WITH CHECK ADD  CONSTRAINT [FK_tblPackageDetails_UserRegistration] FOREIGN KEY([UserId])
REFERENCES [dbo].[UserRegistration] ([Id])
GO
ALTER TABLE [dbo].[tblPackageDetails] CHECK CONSTRAINT [FK_tblPackageDetails_UserRegistration]
GO
ALTER TABLE [dbo].[tblPackageDetails]  WITH CHECK ADD  CONSTRAINT [FK_tblPackageDetails_UserRegistration1] FOREIGN KEY([UserId])
REFERENCES [dbo].[UserRegistration] ([Id])
GO
ALTER TABLE [dbo].[tblPackageDetails] CHECK CONSTRAINT [FK_tblPackageDetails_UserRegistration1]
GO
ALTER TABLE [dbo].[tblQuotation]  WITH CHECK ADD  CONSTRAINT [FK_tblQuotation_Office] FOREIGN KEY([OfficeId])
REFERENCES [dbo].[Office] ([Id])
GO
ALTER TABLE [dbo].[tblQuotation] CHECK CONSTRAINT [FK_tblQuotation_Office]
GO
ALTER TABLE [dbo].[tblQuotation]  WITH CHECK ADD  CONSTRAINT [FK_tblQuotation_tblPackageDetails] FOREIGN KEY([PackageDeatilsId])
REFERENCES [dbo].[tblPackageDetails] ([Id])
GO
ALTER TABLE [dbo].[tblQuotation] CHECK CONSTRAINT [FK_tblQuotation_tblPackageDetails]
GO
ALTER TABLE [dbo].[tblQuotation]  WITH CHECK ADD  CONSTRAINT [FK_tblQuotation_UserRegistration] FOREIGN KEY([UserId])
REFERENCES [dbo].[UserRegistration] ([Id])
GO
ALTER TABLE [dbo].[tblQuotation] CHECK CONSTRAINT [FK_tblQuotation_UserRegistration]
GO
ALTER TABLE [dbo].[tblQuotation]  WITH CHECK ADD  CONSTRAINT [FK_tblQuotation_UserRegistration1] FOREIGN KEY([CreateBy])
REFERENCES [dbo].[UserRegistration] ([Id])
GO
ALTER TABLE [dbo].[tblQuotation] CHECK CONSTRAINT [FK_tblQuotation_UserRegistration1]
GO
ALTER TABLE [dbo].[tblQuotation]  WITH CHECK ADD  CONSTRAINT [FK_tblQuotation_UserRegistration2] FOREIGN KEY([UpdatedBy])
REFERENCES [dbo].[UserRegistration] ([Id])
GO
ALTER TABLE [dbo].[tblQuotation] CHECK CONSTRAINT [FK_tblQuotation_UserRegistration2]
GO
ALTER TABLE [dbo].[Tracking]  WITH CHECK ADD  CONSTRAINT [FK_Tracking_CargoStatusType] FOREIGN KEY([CargoStatusTypeId])
REFERENCES [dbo].[CargoStatusType] ([Id])
GO
ALTER TABLE [dbo].[Tracking] CHECK CONSTRAINT [FK_Tracking_CargoStatusType]
GO
ALTER TABLE [dbo].[Tracking]  WITH CHECK ADD  CONSTRAINT [FK_Tracking_tblBooking] FOREIGN KEY([BookingId])
REFERENCES [dbo].[tblBooking] ([ID])
GO
ALTER TABLE [dbo].[Tracking] CHECK CONSTRAINT [FK_Tracking_tblBooking]
GO
ALTER TABLE [dbo].[Tracking]  WITH CHECK ADD  CONSTRAINT [FK_Tracking_UserRegistration] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[UserRegistration] ([Id])
GO
ALTER TABLE [dbo].[Tracking] CHECK CONSTRAINT [FK_Tracking_UserRegistration]
GO
ALTER TABLE [dbo].[Tracking]  WITH CHECK ADD  CONSTRAINT [FK_Tracking_UserRegistration1] FOREIGN KEY([UpdatedBy])
REFERENCES [dbo].[UserRegistration] ([Id])
GO
ALTER TABLE [dbo].[Tracking] CHECK CONSTRAINT [FK_Tracking_UserRegistration1]
GO
ALTER TABLE [dbo].[UserRegistration]  WITH CHECK ADD  CONSTRAINT [FK_UserRegistration_UserType] FOREIGN KEY([UserTypeId])
REFERENCES [dbo].[UserType] ([Id])
GO
ALTER TABLE [dbo].[UserRegistration] CHECK CONSTRAINT [FK_UserRegistration_UserType]
GO
